WITH RECURSIVE  LinuxDistro AS (SELECT distro_name,percent_use  AS p, 1 as depth FROM linux_statistics WHERE distro_name = 'RedHat'
	
    	UNION ALL
	
	SELECT linux_statistics.distro_name,percent_use, LinuxDistro.depth+1 FROM LinuxDistro, linux_statistics  WHERE LinuxDistro.p < linux_statistics.percent_use)

SELECT distro_name, p as percent_use FROM LinuxDistro WHERE depth = 2;