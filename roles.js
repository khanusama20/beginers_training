export default [
	{
		moduleName: 'Dashboard',
		subModule: [
			{
				title: 'Agent Dashboard',
				keyName: 'agent_dash',
				roles: [
					{
						roleName: 'Agent',
						keyName: 'agent'
						permissions: [
							{
								label: 'View'
								permissionType: 'view',
								value: false
							}, {
								label: 'Edit'
								permissionType: 'edit',
								value: false
							}
						]
					}, {
						roleName: 'Branch Manager',
						keyName: 'branchMgr'
						permissions: [
							{
								label: 'View'
								permissionType: 'view',
								value: false
							}, {
								label: 'Edit'
								permissionType: 'edit',
								value: false
							}
						]
					}
				]

			}
		]
	}, {
		moduleName: 'Reports',
		subModule: [
			{
				title: 'Activity-report (Self) Download',
				keyName: 'slf_ac_report',
				roles: [
					{
						roleName: 'Agent',
						keyName: 'agent'
						permissions: [
							{
								label: 'View'
								permissionType: 'view',
								value: false
							}, {
								label: 'Edit'
								permissionType: 'edit',
								value: false
							}
						]
					}, {
						roleName: 'Branch Manager',
						keyName: 'branchMgr'
						permissions: [
							{
								label: 'View'
								permissionType: 'view',
								value: false
							}, {
								label: 'Edit'
								permissionType: 'edit',
								value: false
							}
						]
					}
				]

			}
		]
	}

]