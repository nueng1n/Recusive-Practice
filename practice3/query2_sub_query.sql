SELECT * FROM linux_statistics 
WHERE percent_use > (SELECT percent_use FROM  linux_statistics WHERE distro_name = 'RedHat');