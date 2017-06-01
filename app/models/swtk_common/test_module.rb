module TestModule
  module Test

    Type = {}
    %W{
      xy_default
      zh_dyzn
      zh_fzqn
      zh_rwdy
      zh_kxjs
      zh_xhxx
      zh_jksh
      zh_zrdd
      zh_sjcx
    }.each{|item| Type[item.to_sym] = Common::Locale::i18n("dict.#{item}")}    
        
    module Status
      None = "none"
      New = "new"    	
      NotStarted = "not_started"
      NoScore = "no_score"
      Editting = "editting"
      Editted = "editted"
      Analyzing = "analyzing" 
      Analyzed = "analyzed"
      ScoreImporting = "score_importing"
      ScoreImported = "score_imported"
      ReportGenerating = "report_generating"
      ReportCompleted = "report_completed" 
    end

    ExtDataCodeArr = Common::SwtkConstants::AlphabetDownCaseArr + Common::SwtkConstants::AlphabetUpCaseArr + Common::SwtkConstants::NumberArr
    ExtDataPathLength = 6
    ExtDataPathDefaultPrefix = "___"    
  end

  module OnrineTest
    module Status
      None = "none"
      Created = "created"
      NoScore = "no_score"
      ScoreImporting = "score_importing"
      ScoreImported = "score_imported"
      ReportGenerating = "report_generating"
      ReportCompleted = "report_completed"
    end

    module Group
      List = ["individual", "total"]
      Individual = "individual"
      Total = "total"
    end
  end
end