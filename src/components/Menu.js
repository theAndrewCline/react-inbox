import React, { Component } from 'react'

import Tag from './Menu/Tag'

export default class Menu extends Component {
	render() {
		const { tags, switchBox, addTag } = this.props

		return (
			<div className="Menu">
				<h1>Menu</h1>
				{tags.map((tag, i) => <Tag key={i} name={tag} switchBox={switchBox} />)}
				<div className="add-input-component">
					Name:
					<input />
					<button onClick={addTag}>Add Inbox</button>
				</div>
			</div>
		)
	}
}
