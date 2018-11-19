const { decodeEntities } = wp.htmlEntities

class FeaturedImage extends React.Component {

	render() {

		const { post, attributes } = this.props

		if (
			attributes.displayPostImage &&
			undefined !== post.featured_image_src &&
			attributes.imgSize &&
			post.featured_image_src[attributes.imgSize]
		) {
			var src = post.featured_image_src[attributes.imgSize]

			return (
				<div className='uagb-post__image'>
					<a href={ post.link } target="_blank" rel ="noopener noreferrer">
						<img
							src={ src[0] }
							alt={ decodeEntities( post.title.rendered.trim() ) || __( "(Untitled)" ) }
						/>
					</a>
				</div>
			)
		} else {

			return null
		}
	}
}

export default FeaturedImage
