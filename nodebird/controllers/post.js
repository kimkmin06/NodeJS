const { Post, Hashtag } = require("../models");

exports.afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
};

exports.uploadPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s#]*/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          });
        })
      );
      await post.addHashtags(result.map((r) => r[0]));
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.editPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const newContent = req.body.content;

    const post = await Post.findOne({ where: { id: postId } });
    if (post) {
      await post.update({ content: newContent });
      res.send("success");
    } else {
      res.status(404).send("fail");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (post) {
      await post.destroy({ where: { id: req.params.id } });
      res.send("success");
    } else {
      res.status(404).send("fail");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
