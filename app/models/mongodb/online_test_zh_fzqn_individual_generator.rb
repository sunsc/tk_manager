# -*- coding: UTF-8 -*-

class Mongodb::OnlineTestZhFzqnIndividualGenerator < Mongodb::OnlineTestZhCommonIndividualGenerator
  include Mongoid::Document

  code_file = Rails.root + "config/initializers/patches/mongodb_online_test_zh_fzqn_individual_generator_patch.txt"
  begin
    eval(TkEncryption::codes_str_decryption(code_file,1))
  rescue Exception => ex
    #
  end

end