SQLite format 3   @     7   "                                                            7 -�'   �    "�����                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
   
    � ��|^:����Z)���yW; � � � �                                                                                                 +#Can delete linkdelete_link  +#Can change linkchange_link %Can add linkadd_link  +#Can delete postdelete_post  +#Can change postchange_post %Can add postadd_post  +#Can delete sitedelete_site  +#Can change sitechange_site %Can add siteadd_site& 1)Can delete sessiondelete_session& 1)Can change sessionchange_session  +#Can add sessionadd_session/ ;1Can delete content typedelete_contenttype/ ;1Can change content typechange_contenttype)
 5+Can add content typeadd_contenttype 	 +#Can delete userdelete_user  +#Can change userchange_user %Can add useradd_user" -%Can delete groupdelete_group" -%Can change groupchange_group 'Can add groupadd_group, 7/Can delete permissiondelete_permission, 7/Can change permissionchange_permission& 1)Can add permissionadd_permission
   5 ������vdR<#
�������zhYG5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             #delete_link#change_linkadd_link#delete_post#change_postadd_post#delete_site#change_siteadd_site)delete_session)change_session#add_session1delete_contenttype1change_contenttype+add_contenttype
#delete_user	#change_useradd_user%delete_group%change_groupadd_group/delete_permission/change_permission)add_permission                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  �  ��$q                                                                                                                                                                  �++�Stableauth_permissionauth_permissionCREATE TABLE "auth_permission" (
    "id" integer NOT NULL PRIMARY KEY,
    "name" varchar(50) NOT NULL,
    "content_type_id" integer NOT NULL,
    "codename" varchar(100) NOT NULL,
    UNIQUE ("content_type_id", "codename")
)=Q+ indexsqlite_autoindex_auth_permission_1auth_permission�99�Utableauth_group_permissionsauth_group_permissionsCREATE TABLE "auth_group_permissions" (
    "id" integer NOT NULL PRIMARY KEY,
    "group_id" integer NOT NULL,
    "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id"),
    UNIQUE ("group_id", "permission_id")
)K_9 indexsqlite_autoindex_auth_group_permissions_1auth_group_permissions�!!�ctableauth_groupauth_groupCREATE TABLE "auth_group" (
    "id" integer NOT NULL PRIMARY KEY,
    "name" varchar(80) NOT NULL UNIQUE
)    C@��                                                                                                                                                                                                                                                            3G! indexsqlite_autoindex_auth_group_1auth_group�z--�'tableauth_user_groupsauth_user_groupsCREATE TABLE "auth_user_groups" (
    "id" integer NOT NULL PRIMARY KEY,
    "user_id" integer NOT NULL,
    "group_id" integer NOT NULL REFERENCES "auth_group" ("id"),
    UNIQUE ("user_id", "group_id")
)?S- indexsqlite_autoindex_auth_user_groups_1auth_user_groups	�'	AA�Ytableauth_user_user_permissionsauth_user_user_permissionsCREATE TABLE "auth_user_user_permissions" (
    "id" integer NOT NULL PRIMARY KEY,
    "user_id" integer NOT NULL,
    "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id"),
    UNIQUE ("user_id", "permission_id")
)S
gA indexsqlite_autoindex_auth_user_user_permissions_1auth_user_user_permissions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         � �'AApbkdf2_sha256$10000$iD4eI88wJQxH$9QrTOYRDuTo7CXDZ7UxS2B98iT86erZae7VE5EZInz8=2013-09-24 18:14:54.629434seba-15112013-09-24 18:14:54.629434
   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        seba-1511    �  �u��                                                                                                                                                        �J�ctableauth_userauth_userCREATE TABLE "auth_user" (
    "id" integer NOT NULL PRIMARY KEY,
    "password" varchar(128) NOT NULL,
    "last_login" datetime NOT NULL,
    "is_superuser" bool NOT NULL,
    "username" varchar(30) NOT NULL UNIQUE,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL,
    "email" varchar(75) NOT NULL,
    "is_staff" bool NOT NULL,
    "is_active" bool NOT NULL,
    "date_joined" datetime NOT NULL
)1E indexsqlite_autoindex_auth_user_1auth_user�33�Ctabledjango_content_typedjango_content_typeCREATE TABLE "django_content_type" (
    "id" integer NOT NULL PRIMARY KEY,
    "name" varchar(100) NOT NULL,
    "app_label" varchar(100) NOT NULL,
    "model" varchar(100) NOT NULL,
    UNIQUE ("app_label", "model")
)EY3 indexsqlite_autoindex_django_content_type_1django_content_type   / ����r^G/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        linknanolinkslink postnanoblogpost sitesitessite sessionsessionssession( %%#content typecontenttypescontenttype userauthuser groupauthgroup !!permissionauthpermission
   i ����|i��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 nanolinkslinknanoblogpostsitessitesessionssession%#contenttypescontenttypeauthuserauthgroup!authpermission    �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      M�A5d9mvw4ju5duwvls5jzpk61013r4i9fqMWY1MmJiNzU4MTQxOTNjOTk1OGEzMjlkOWYxZTZlZmI5MmJlYzliMzqAAn1xAS4=2013-10-14 22:06:26.652711{M�A8wt4n8fensd4lg56lz55ifi6vf69rmzqNWU1N2JmZDY0NzA0MTVjNzBlM2U2MTAzM2I3OTdhMDVmNTE1ZWI0Mzp7fQ==2013-10-08 18:14:57.511585
   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          $M5d9mvw4ju5duwvls5jzpk61013r4i9fq$M8wt4n8fensd4lg56lz55ifi6vf69rmzq    ��y                                                                                                                                                                                                                                               �D))�Ctabledjango_sessiondjango_sessionCREATE TABLE "django_session" (
    "session_key" varchar(40) NOT NULL PRIMARY KEY,
    "session_data" text NOT NULL,
    "expire_date" datetime NOT NULL
);O) indexsqlite_autoindex_django_session_1django_session�,##�tabledjango_sitedjango_siteCREATE TABLE "django_site" (
    "id" integer NOT NULL PRIMARY KEY,
    "domain" varchar(100) NOT NULL,
    "name" varchar(50) NOT NULL
)�B''�Ctablenanoblog_postnanoblog_postCREATE TABLE "nanoblog_post" (
    "id" integer NOT NULL PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "content" text,
    "date" datetime NOT NULL
)�=+�-indexauth_permission_37ef4eb4auth_permissionCREATE INDEX "auth_permission_37ef4eb4" ON "auth_permission" ("content_type_id")   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ##example.comexample.com�  �D�`�4�                                                                                                                                                                                                                                                        �7	 �)ATo solve:-why only shown, after the second refresh
-fix by implementing $resource
-create directive for back button
-Perform be nltobr
-implement links2013-10-01 00:54:51.248678h =oAlast one with the tabletLast post created with the tablet... Look it up !2013-10-01 00:53:01.423235* AhajjsJwnsns2013-10-01 00:52:28.325856t #�AjQuery AjaxWorking with ajax is nice. So REST and AJAX seems to be friends forever !2013-09-24 22:45:38.476391l #�AjQuery AjaxWorking with ajax is nice. So REST and AJAX seems to be friends !2013-09-24 22:36:26.077805D #AAjQuery AjaxWorking with ajax is nice.2013-09-24 22:35:24.392516D #AAjQuery AjaxWorking with ajax is nice.2013-09-24 22:35:10.656194   * AhahhaNsnsns2013-10-01 00:51:52.997407
   p ���������������������|vp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  �N�U                                                                                                                                                                                                                                                               �K9�;indexauth_group_permissions_5f412f9aauth_group_permissionsCREATE INDEX "auth_group_permissions_5f412f9a" ON "auth_group_permissions" ("group_id")�K9�Eindexauth_group_permissions_83d7f98bauth_group_permissionsCREATE INDEX "auth_group_permissions_83d7f98b" ON "auth_group_permissions" ("permission_id")� ?-�!indexauth_user_groups_6340c63cauth_user_groupsCREATE INDEX "auth_user_groups_6340c63c" ON "auth_user_groups" ("user_id")�?-�#indexauth_user_groups_5f412f9aauth_user_groupsCREATE INDEX "auth_user_groups_5f412f9a" ON "auth_user_groups" ("group_id")�(SA�Iindexauth_user_user_permissions_6340c63cauth_user_user_permissionsCREATE INDEX "auth_user_user_permissions_6340c63c" ON "auth_user_user_permissions" ("user_id")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      A2013-10-14 22:06:26.652711A2013-10-08 18:14:57.511585   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      > ;Ahttp://www.asdfasdf.comadfasdfa2013-09-29 14:11:59.179275< 5Ahttp://www.tooski.chTooski.ch2013-09-24 18:37:22.176713   � ��*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             �.SA�Uindexauth_user_user_permissions_83d7f98bauth_user_user_permissionsCREATE INDEX "auth_user_user_permissions_83d7f98b" ON "auth_user_user_permissions" ("permission_id")|;)�!indexdjango_session_b7b81f0cdjango_session CREATE INDEX "django_session_b7b81f0c" ON "django_session" ("expire_date")�S))�atablenanolinks_linknanolinks_link!CREATE TABLE "nanolinks_link" (
    "id" integer NOT NULL PRIMARY KEY,
    "link" varchar(1024) NOT NULL,
    "name" varchar(255) NOT NULL,
    "date" datetime NOT NULL
)