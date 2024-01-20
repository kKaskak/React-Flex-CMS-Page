import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'array',
			of: [{type: 'image'}],
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'title',
			title: 'Item Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 90,
			},
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{type: 'reference', to: {type: 'itemCategory'}}],
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
		}),
		defineField({
			name: 'details',
			title: 'Details',
			type: 'string',
		}),
	],
});
