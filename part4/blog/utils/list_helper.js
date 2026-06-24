const dummy = (blogs) => 1

const totalLikes = (blogs) => {
    return blogs.length === 0
    ? 0  
    : blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    return blogs.length === 0
    ? undefined
    : blogs.reduce((best, blog) => {
        return blog.likes > best.likes ? blog : best
    }, blogs[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}