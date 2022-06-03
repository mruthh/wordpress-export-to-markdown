/* post_id: [ '4' ],
  post_date: [ '2010-09-12 11:35:29' ],
  post_date_gmt: [ '2010-09-12 15:35:29' ],
  post_modified: [ '2010-09-12 11:35:29' ],
  post_modified_gmt: [ '2010-09-12 15:35:29' ],
  comment_status: [ 'open' ],
  ping_status: [ 'open' ],
  post_name: [ 'how-i-got-here-an-introduction' ],
  status: [ 'publish' ],
  post_parent: [ '0' ],
  menu_order: [ '0' ],
  post_type: [ 'post' ],
  post_password: [ '' ],
  is_sticky: [ '0' ],
  category: [
    { _: 'bdsm', '$': [Object] },
    { _: 'healing', '$': [Object] },
    { _: 'kink', '$': [Object] },
    { _: 'metablogging', '$': [Object] },
    { _: 'sex', '$': [Object] },
    { _: 'Storytelling', '$': [Object] },
    { _: 'trauma', '$': [Object] }
  ],
  postmeta: [
    { meta_key: [Array], meta_value: [Array] },
    { meta_key: [Array], meta_value: [Array] },
    { meta_key: [Array], meta_value: [Array] },
    { meta_key: [Array], meta_value: [Array] },
    { meta_key: [Array], meta_value: [Array] }
  ],
  comment: [
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    },
    {
      comment_id: [Array],
      comment_author: [Array],
      comment_author_email: [Array],
      comment_author_url: [Array],
      comment_author_IP: [Array],
      comment_date: [Array],
      comment_date_gmt: [Array],
      comment_content: [Array],
      comment_approved: [Array],
      comment_type: [Array],
      comment_parent: [Array],
      comment_user_id: [Array],
      commentmeta: [Array]
    }
  ]
}
*/

function getPostComments (post) {
  if (!post.comment) return []

  return post.comment
    .filter(c => c.comment_approved[0] && c.comment_type[0] !== 'pingback')
    .map(c => {
      return {
        author: c.comment_author[0],
        authorUrl: c.comment_author_url[0],
        commentDate: c.comment_date[0],
      // we name this "encoded" so it can go into the getPostContent fn without alteration
      encoded: [c.comment_content[0]]
      }
    })
}

exports.getPostComments = getPostComments