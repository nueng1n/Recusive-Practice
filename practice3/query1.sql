WITH RECURSIVE  LinuxDistro AS (SELECT fork_from AS parent FROM linux WHERE distro_name = 'LinuxMint'
	
    	UNION ALL
	
	SELECT fork_from FROM LinuxDistro, linux WHERE LinuxDistro.parent = linux.distro_name)

SELECT * FROM LinuxDistro;
