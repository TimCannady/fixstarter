class IssuesController < ApplicationController

  def show
    if @issue = Issue.find_by(id: params[:id])
      @fixes = @issue.fixes
      @comments = @issue.issue_comments.map { |comment| comment.package_info }
    else
      redirect_to welcome_index_path
    end
  end

  def new
    return @zip = current_user.zip if user_signed_in?
    redirect_to welcome_index_path
  end

  def create
    @issue = Issue.new(issue_params)
    current_user.issues << @issue
    @issue.save
  end


  private
  def issue_params
    params.permit(:title, :description, :latitude, :longitude)
    # params.permit(:title, :description, :zip, :image)
  end

end
