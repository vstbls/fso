const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

blog1 = {
  title: 'Go To Statement Considered Harmful',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
  likes: 5,
}

blog2 = {
  title: 'Go To Statement Considered HELPFUL',
  author: 'Evil W. Dijkstra',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Super_Helpful.html',
  likes: 50,
}

blog3 = {
  title: 'Go To Statement Considered More Controversial Than Expected',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
  likes: 1,
}

describe('total likes', () => {
  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes([blog1])
    assert.strictEqual(result, 5)
  })

  test('likes of two blogs are summed correctly', () => {
    const result = listHelper.totalLikes([blog1, blog2])
    assert.strictEqual(result, 55)
  })

  test('empty array has zero likes', () => {
    assert.strictEqual(listHelper.totalLikes([]), 0)
  })
})

describe('favorite blog', () => {

  test('the only blog is the best blog', () => {
    const result = listHelper.favoriteBlog([blog1])
    assert.deepStrictEqual(result, blog1)
  })

  test('favorite from two blogs found correctly', () => {
    const result = listHelper.favoriteBlog([blog1, blog2])
    assert.deepStrictEqual(result, blog2)
  })

  test('empty array has no favorite', () => {
    assert.deepStrictEqual(listHelper.favoriteBlog([]), undefined)
  })
})

describe('most blogs', () => {
  test('the only blogger writes the most', () => {
    assert.deepStrictEqual(listHelper.mostBlogs([blog1]), {
      author: 'Edsger W. Dijkstra',
      blogs: 1
    })
  })

  test('most frequent blogger is the first one', () => {
    assert.deepStrictEqual(listHelper.mostBlogs([blog1, blog2]), {
      author: 'Edsger W. Dijkstra',
      blogs: 1
    })
  })

  test('most blogs found from three', () => {
    assert.deepStrictEqual(listHelper.mostBlogs([blog1, blog2, blog3]), {
      author: 'Edsger W. Dijkstra',
      blogs: 2
    })
  })

  test('most blogs in an empty list is undefined', () => {
    assert.deepStrictEqual(listHelper.mostBlogs([]), undefined)
  })
})

describe('most likes', () => {
  test('the only blog has the most likes', () => {
    assert.deepStrictEqual(listHelper.mostLikes([blog1]), {
      author: 'Edsger W. Dijkstra',
      likes: 5
    })
  })

  test('likes are summed correctly when finding most liked', () => {
    assert.deepStrictEqual(listHelper.mostLikes([blog1, blog3]), {
      author: 'Edsger W. Dijkstra',
      likes: 6
    })
  })

  test('most blogs found from three', () => {
    assert.deepStrictEqual(listHelper.mostLikes([blog1, blog2, blog3]), {
      author: 'Evil W. Dijkstra',
      likes: 50
    })
  })

  test('most liked in an empty list is undefined', () => {
    assert.deepStrictEqual(listHelper.mostLikes([]), undefined)
  })
})