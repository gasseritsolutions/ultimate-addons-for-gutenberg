const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

const {
	createBlock
} = wp.blocks

class Prefix extends React.Component {

	render() {

		//const { attributes, setAttributes } = this.props;

		const {
			attributes,
			setAttributes ,
			props
		} = this.props

		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName="span"
	                value={ attributes.prefixTitle }
	                className='uagb-ifb-title-prefix'
	                onChange={ ( value ) => setAttributes( { prefixTitle: value } ) }
	                onMerge = { props.mergeBlocks }
	                onSplit = {
						props.insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								props.insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => props.onReplace( [] ) }
	            />
			)
		}else{
			return (
				<RichText.Content
	                tagName="span"
	                value={ attributes.prefixTitle }
	                className='uagb-ifb-title-prefix'
	            />
			)
		}
	}
}

export default Prefix