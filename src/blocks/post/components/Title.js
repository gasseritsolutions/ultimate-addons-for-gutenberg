const { decodeEntities } = wp.htmlEntities
const { __ } = wp.i18n

class Title extends React.Component {

	render() {

		const Tag = this.props.attributes.titleTag

		const { post, attributes } = this.props

		return (

			<Tag
				className={ "uagb-post__title" }
				style={{
					color: attributes.titleColor,
					fontSize: attributes.titleFontSize,
					marginBottom: attributes.titleBottomSpace
				}}
			>
				<a
					style={{
						color: attributes.titleColor,
						fontSize: attributes.titleFontSize
					}}
					href={ post.link }
					target="_blank"
					rel ="noopener noreferrer">{ decodeEntities( post.title.rendered.trim() ) || __( "(Untitled)" ) }</a>
			</Tag>
		)
	}
}

export default Title