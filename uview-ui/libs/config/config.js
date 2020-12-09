// 此版本发布于2020-09-17
const version = '1.7.1'

export default {
	v: version,
	version,
	// 主题名称
	type: [
		'primary',
		'success',
		'info',
		'danger',
		'warning'
	],
	// 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
	color: {
		'u-primary': '#2979ff',
		'u-warning': '#ff9900',
		'u-success': '#19be6b',
		'u-danger': '#fa3534',
		'u-info': '#909399',
		'u-main-color': '#303133',
		'u-content-color': '#606266',
		'u-tips-color': '#909399',
		'u-light-color': '#c0c4cc',
	}
}