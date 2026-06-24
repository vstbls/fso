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

const mostBlogs = (blogs) => {
    if (blogs.length === 0) return undefined
    blog_count = blogs.reduce((dict, blog) => {
        if (!dict[blog.author]) {
            dict[blog.author] = 0
        }
        dict[blog.author] += 1
        return dict
    }, {})
    unstoppable_author = Object.entries(blog_count)
        .reduce((max, cur) => cur[1] > max[1] ? cur : max, ["", -Infinity])
    return { author: unstoppable_author[0], blogs: unstoppable_author[1] }
}

const mostLikes = (blogs) => {
    if (blogs.length === 0) return undefined
    blog_count = blogs.reduce((dict, blog) => {
        if (!dict[blog.author]) {
            dict[blog.author] = 0
        }
        dict[blog.author] += blog.likes
        return dict
    }, {})
    favorite_author = Object.entries(blog_count)
        .reduce((max, cur) => cur[1] > max[1] ? cur : max, ["", -Infinity])
    return { author: favorite_author[0], likes: favorite_author[1] }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}