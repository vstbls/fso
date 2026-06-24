const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
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