import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
	name: 'default',
	title: 'agency',

	projectId: '7u0kox4y',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
})
