const { successResponse, errorResponse } = require('../utils/responseHandler');
const postService = require('../services/postService');

module.exports.createPost = async (req, res) => { 
    try{
        const userId = req.userId;
        const { content } = req.body;
        const newPost = await postService.createPost(userId, content);
        return successResponse(res, newPost, 'Post created successfully', 201);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}

module.exports.likePost = async (req, res) => {
    try {
      const userId = req.userId;
      const { postId } = req.params;
      const post = await postService.likePost(postId, userId);
      return successResponse(res,post,'Post liked/unliked successfully', 201);
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };

module.exports.commentPost = async (req, res) => {
    try {
      const userId = req.userId;
      const { postId } = req.params;
      const { content } = req.body;
      const post = await postService.commentPost(postId, userId, content);
      return successResponse(res, post, 'Comment added successfully', 201);
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };
