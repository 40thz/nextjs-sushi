const { default: AdminJS } = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

const { Admin, Vacancy } = require('./resourceOptions')

AdminJS.registerAdapter(AdminJSMongoose)

/** @type {import('adminjs').AdminJSOptions} */

const options = {
	locale: {
		language: 'rus',
		translations: {
			actions: {
				new: 'Добавить',
				edit: 'Редактировать',
				show: 'Подробнее',
				delete: 'Удалить',
				list: 'Записи',
				search: 'Искать',
				addNewItem: 'Добавить',
				yes: 'Да',
			},
			labels: {
				Admin: 'Администраторы',
				Vacancy: 'Вакансии',
			},
			buttons: {
				filter: 'Фильтр',
				save: 'Сохранить',
			},
			resources: {
				Vacancy: {
					properties: {
						uploadedFile: 'Тип вакансии',
						name: 'Наименование',
						sliderDescription: 'Краткое описание вакансии',
						description: 'Подробное описание вакансии',
						conditions: 'Условия работы',
					},
				},
			},
		},
	},
	resources: [Admin, Vacancy],
	branding: {
		companyName: 'Dashboard',
		logo: '',
		softwareBrothers: false,
	},
}

module.exports = options
