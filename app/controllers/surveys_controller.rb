class SurveysController < ApplicationController
  def show
    @survey = Survey.find(params[:id])
  end
  def new

  end
  def create
    @survey = Survey.new(params.require(:survey).permit(:a1, :a2, :a3, :a4, :a5, :a6, :a7, :a8, :a9, :a10))

    @survey.save
    redirect_to @survey
  end

  private
    def survey_params
      params.require(:survey).permit(:a1, :a2, :a3, :a4, :a5, :a6, :a7, :a8, :a9, :a10)
    end
end
