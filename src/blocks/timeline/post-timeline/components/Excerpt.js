class Excerpt extends React.Component {

	render() {

		const { post, attributes } = this.props
		
		if (
			attributes.displayPostExcerpt &&
			undefined !== post.excerpt
		) {

			if( attributes.displayPostExcerpt && post.excerpt ){
				var trimmed_excerpt =  (post.excerpt).split(/\s+/).slice(0,attributes.exerptLength).join(" ")
			}

			let margin_var = ""
			if( attributes.displayPostLink ){
            	margin_var = attributes.contentSpace+"px"
			}
			return (				
				<div className = "uagb-timeline-desc-content" dangerouslySetInnerHTML={ { __html: trimmed_excerpt } } style= {{
					marginBottom: margin_var
				}} />
			)

		} else {
			return null
		}
	}
}

export default Excerpt
