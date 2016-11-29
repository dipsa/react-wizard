export function gotoContent(contentId) {
  return {
    type: 'GOTO_CONTENT',
    payload: contentId
  }
}

export function showContent(contentId) {
  return {
    type: 'SHOW_CONTENT',
    payload: contentId
  }
}
