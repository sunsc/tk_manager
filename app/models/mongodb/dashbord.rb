class Mongodb::Dashbord
  include Mongoid::Document
  include Mongodb::MongodbPatch

  before_create :set_create_time_stamp
  before_save :set_update_time_stamp

  field :data, type: Array #分类结果
  field :branch_tp, type: String #分支类别
  field :total_tp, type: String #总类别

  field :dt_add, type: DateTime
  field :dt_update, type: DateTime
 
  class << self

    #处理排序后的结果集将结果汉化并且转成相应格式
    def deal_result(result,path)
      arr = []
      result.each do |re|
        hash = {}
        hash['name'] = Common::Locale::i18n("#{path}.#{re[0]}")
        hash['value'] = re[1]
        arr << hash
      end
      return arr
    end

    #分段获取指标情况
    def get_group_ckps(params)
      group_name = params[:group_name]
      conditions = {}
      %w{subject category}.each{|attr|
        case attr
        when 'subject'
          key = Common::Subject::List.key(params[attr])
        when 'category'
          key = Common::Grade::XueDuan::List.key(params[attr])
        end    
        conditions[attr] = key unless key.blank? 
      }
      result = BankSubjectCheckpointCkp.where(conditions).group(group_name.to_sym).count
      case group_name
      when 'category'
        result = result.sort_by{|key,value| Common::Grade::XueDuan::Order[key.to_sym]}
        arr = deal_result(result,"checkpoints.subject.category")
      when 'subject'
        result = result.sort_by{|key,value| Common::Subject::Order[key.to_sym]}
        arr = deal_result(result,"dict")
      when 'dimesion'
        result = result.sort_by{|key,value| Common::CheckpointCkp::Order[key.to_sym]}
        arr = deal_result(result,"checkpoints.dimesion")
      end
      return arr
    end

    #获取所有指标情况  
    def get_all_ckps
      result = BankSubjectCheckpointCkp.group(:category,:subject,:dimesion).count
      category = {}
      subject = {}
      result.each do |key,value|
        category[key[0]] = category[key[0]].to_i + value
        subject[key[0..1]] = subject[key[0..1]].to_i + value
      end
      arr = []
      #根据key排序得道排序的二维数组
      result = result.sort_by{|key,value| Common::Grade::XueDuan::Order[key[0].to_sym]+Common::Subject::Order[key[1].to_sym]+Common::CheckpointCkp::Order[key[2].to_sym]}
      result.each do |re|
        hash = {}
        hash['category'] = Common::Locale::i18n("checkpoints.subject.category.#{re[0][0]}")
        hash['subject'] = Common::Locale::i18n("dict.#{re[0][1]}")
        hash['dimesion'] = Common::Locale::i18n("checkpoints.dimesion.#{re[0][2]}")
        hash['dimesion_count'] = re[1]
        hash['category_count'] = category[re[0][0]]
        hash['subject_count'] = subject[re[0][0..1]]
        arr << hash
      end
      return arr
    end
  end

  #更新试卷类型中的分类
  def update_paper
    #获取试卷对象按branch_tp分类
    paper = Mongodb::BankPaperPap.only(self.branch_tp.to_sym).group_by(&self.branch_tp.to_sym)
    arr = get_data(paper){|key| get_cn_key(key,self.branch_tp)}
    result = update_data(arr)
    return result
  end

  #更新用户类型中的分类
  def update_user
    #获取user对象按branch_tp分类
    user = User.select(self.branch_tp.to_sym).group_by(&self.branch_tp.to_sym)
    arr = get_data(user){|key| get_cn_key(key,self.branch_tp)}
    result = update_data(arr)
    return result
  end

  def update_danti
    danti = Mongodb::BankQuizQiz.only(self.branch_tp.to_sym).group_by(&self.branch_tp.to_sym)
    arr = get_data(danti){|key| get_cn_key(key,self.branch_tp)}
    result = update_data(arr)
    return result
  end

  #将分组结果转换成hash数组并且按数量从大到小排序
  def get_data(data_group=[],&block)
    arr = []
    empty_key_hash = {}
    empty_key_hash['name'] = '无'
    empty_key_hash['value'] = 0
    # hash = {}
    data_group.each do |key,value|
      key = proc.call(key)
      if key=="无"#如果key为nil或''时合并成一组
        empty_key_hash['value'] = empty_key_hash['value'] + value.size
      else
        new_hash = {}
        new_hash['name'] = key
        new_hash['value'] = value.size
        arr << new_hash
      end
      # hash[key] = hash[key].to_i + value.size
    end
    arr << empty_key_hash if empty_key_hash['value'] > 0
    arr.sort! {|hash1,hash2| hash1['value']<=>hash2['value']}
    arr = arr.reverse
  end

  #将字段名称转换成中文
  def get_cn_key(key,branch)
    case branch
    when 'paper_status'
      key = (Common::Locale::i18n("papers.status.#{key}"))
    when 'grade','term','cat','subject','levelword2'
      key = (Common::Locale::i18n("dict.#{key}"))
    when "role_id"
      role = Role.where(id: key).first
      key = role.present? ? Common::Locale::i18n("activerecord.models.#{role.name}") : "无"
    end
    return key.present? ? key : "无"
  end

  #更新数据并返回data和时间
  def update_data(arr)
    self.data = arr
    self.save!
    hash = {}
    hash['data'] = self.data
    hash['dt_update'] = self.dt_update.strftime("%Y-%m-%d %H:%M:%S")
    return hash
  end
end