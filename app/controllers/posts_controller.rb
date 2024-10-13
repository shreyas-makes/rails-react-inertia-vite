class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]

  # GET /posts
  def index
    @posts = Post.all.order(created_at: :desc)
    render inertia: 'Posts/Index', props: { posts: @posts.as_json }
  end

  # GET /posts/1
  def show
    render inertia: 'Posts/Show', props: { post: @post.as_json }
  end

  # GET /posts/new
  def new
    @post = Post.new
    render inertia: 'Posts/New', props: { post: @post.as_json }
  end

  # GET /posts/1/edit
  def edit
    render inertia: 'Posts/Edit', props: { post: @post.as_json }
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render inertia: 'Posts/Show', props: { post: @post.as_json }, status: :created
    else
      render inertia: 'Posts/New', props: { post: @post.as_json }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render inertia: 'Posts/Show', props: { post: @post.as_json }
    else
      render inertia: 'Posts/Edit', props: { post: @post.as_json }, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    render inertia: 'Posts/Index', props: { posts: Post.all.as_json }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:title, :content)
  end
end