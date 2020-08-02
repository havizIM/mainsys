<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'home';
$route['login'] = 'auth/login';
$route['authenticate'] = 'authorization/authenticate';
$route['logout'] = 'authorization/logout';

/* ADMINISTRATOR ROUTE */
$route['administrator'] = 'administrator/main';
$route['administrator/setting'] = 'administrator/page/setting';

$route['administrator/dashboard'] = 'administrator/page/dashboard';

$route['administrator/administrator'] = 'administrator/page/administrator';
$route['administrator/administrator/add'] = 'administrator/page/administrator/add';
$route['administrator/administrator/(:num)'] = 'administrator/page/administrator/detail/$1';
$route['administrator/administrator/edit/(:num)'] = 'administrator/page/administrator/edit/$1';

$route['administrator/engineer'] = 'administrator/page/engineer';
$route['administrator/engineer/add'] = 'administrator/page/engineer/add';
$route['administrator/engineer/(:num)'] = 'administrator/page/engineer/detail/$1';
$route['administrator/engineer/edit/(:num)'] = 'administrator/page/engineer/edit/$1';

$route['administrator/partner/(:num)/user/add'] = 'administrator/page/PartnerUser/add/$1';
$route['administrator/partner/(:num)/category/add'] = 'administrator/page/Category/add/$1';
$route['administrator/partner/(:num)/building/add'] = 'administrator/page/Building/add/$1';
$route['administrator/partner/(:num)/procedure/add'] = 'administrator/page/Procedure/add/$1';
$route['administrator/partner/(:num)/equipment/add'] = 'administrator/page/Equipment/add/$1';

$route['administrator/partner/user/(:num)'] = 'administrator/page/PartnerUser/detail/$1';
$route['administrator/partner/category/(:num)'] = 'administrator/page/Category/detail/$1';
$route['administrator/partner/building/(:num)'] = 'administrator/page/Building/detail/$1';
$route['administrator/partner/procedure/(:num)'] = 'administrator/page/Procedure/detail/$1';
$route['administrator/partner/equipment/(:num)'] = 'administrator/page/Equipment/detail/$1';

$route['administrator/partner/user/edit/(:num)'] = 'administrator/page/PartnerUser/edit/$1';
$route['administrator/partner/category/edit/(:num)'] = 'administrator/page/Category/edit/$1';
$route['administrator/partner/building/edit/(:num)'] = 'administrator/page/Building/edit/$1';
$route['administrator/partner/procedure/edit/(:num)'] = 'administrator/page/Procedure/edit/$1';
$route['administrator/partner/equipment/edit/(:num)'] = 'administrator/page/Equipment/edit/$1';

$route['administrator/partner'] = 'administrator/page/partner';
$route['administrator/partner/add'] = 'administrator/page/partner/add';
$route['administrator/partner/(:num)'] = 'administrator/page/partner/detail/$1';
$route['administrator/partner/edit/(:num)'] = 'administrator/page/partner/edit/$1';


$route['administrator/work_order'] = 'administrator/page/WorkOrder';
$route['administrator/work_order/(:num)'] = 'administrator/page/WorkOrder/detail/$1';
$route['administrator/work_order/(:num)/create_schedule'] = 'administrator/page/WorkOrder/create_schedule/$1';

$route['administrator/preventive_schedule'] = 'administrator/page/PreventiveSchedule';
$route['administrator/preventive_schedule/(:num)'] = 'administrator/page/PreventiveSchedule/detail/$1';
$route['administrator/preventive_schedule/add'] = 'administrator/page/PreventiveSchedule/add';

$route['administrator/corrective_schedule'] = 'administrator/page/CorrectiveSchedule';
$route['administrator/corrective_schedule/(:num)'] = 'administrator/page/CorrectiveSchedule/detail/$1';

$route['administrator/preventive_report'] = 'administrator/page/PreventiveReport';
$route['administrator/preventive_report/(:num)'] = 'administrator/page/PreventiveReport/detail/$1';

$route['administrator/corrective_report'] = 'administrator/page/CorrectiveReport';
$route['administrator/corrective_report/(:num)'] = 'administrator/page/CorrectiveReport/detail/$1';



/* ENGINEER ROUTE */
$route['engineer'] = 'engineer/main';
$route['engineer/setting'] = 'engineer/page/setting';

$route['engineer/dashboard'] = 'engineer/page/dashboard';

$route['engineer/building/(:num)'] = 'engineer/page/building/detail/$1';

$route['engineer/procedure/(:num)'] = 'engineer/page/procedure/detail/$1';

$route['engineer/equipment/(:num)'] = 'engineer/page/equipment/detail/$1';

$route['engineer/work_order/(:num)'] = 'engineer/page/WorkOrder/detail/$1';

$route['engineer/preventive_schedule'] = 'engineer/page/PreventiveSchedule';
$route['engineer/preventive_schedule/(:num)'] = 'engineer/page/PreventiveSchedule/detail/$1';
$route['engineer/preventive_schedule/(:num)/equipment/(:num)/create_report'] = 'engineer/page/PreventiveSchedule/create_report/$1/$2';

$route['engineer/corrective_schedule'] = 'engineer/page/CorrectiveSchedule';
$route['engineer/corrective_schedule/(:num)'] = 'engineer/page/CorrectiveSchedule/detail/$1';
$route['engineer/corrective_schedule/(:num)/create_report'] = 'engineer/page/CorrectiveSchedule/create_report/$1';

$route['engineer/preventive_report'] = 'engineer/page/PreventiveReport';
$route['engineer/preventive_report/(:num)'] = 'engineer/page/PreventiveReport/detail/$1';

$route['engineer/corrective_report'] = 'engineer/page/CorrectiveReport';
$route['engineer/corrective_report/(:num)'] = 'engineer/page/CorrectiveReport/detail/$1';



/* PARTNER ROUTE */
$route['partner'] = 'partner/main';
$route['partner/setting'] = 'partner/page/setting';

$route['partner/dashboard'] = 'partner/page/dashboard';

$route['partner/category'] = 'partner/page/category';
$route['partner/category/(:num)'] = 'partner/page/category/detail/$1';

$route['partner/building'] = 'partner/page/building';
$route['partner/building/(:num)'] = 'partner/page/building/detail/$1';

$route['partner/procedure'] = 'partner/page/procedure';
$route['partner/procedure/(:num)'] = 'partner/page/procedure/detail/$1';

$route['partner/equipment'] = 'partner/page/equipment';
$route['partner/equipment/(:num)'] = 'partner/page/equipment/detail/$1';

$route['partner/work_order'] = 'partner/page/WorkOrder';
$route['partner/work_order/add'] = 'partner/page/WorkOrder/add';
$route['partner/work_order/(:num)'] = 'partner/page/WorkOrder/detail/$1';

$route['partner/preventive_schedule'] = 'partner/page/PreventiveSchedule';
$route['partner/preventive_schedule/(:num)'] = 'partner/page/PreventiveSchedule/detail/$1';

$route['partner/corrective_schedule'] = 'partner/page/CorrectiveSchedule';
$route['partner/corrective_schedule/(:num)'] = 'partner/page/CorrectiveSchedule/detail/$1';

$route['partner/preventive_report'] = 'partner/page/PreventiveReport';
$route['partner/preventive_report/(:num)'] = 'partner/page/PreventiveReport/detail/$1';

$route['partner/corrective_report'] = 'partner/page/CorrectiveReport';
$route['partner/corrective_report/(:num)'] = 'partner/page/CorrectiveReport/detail/$1';


/* ERROR ROUTE */
$route['unauthenticated'] = 'HandlerPage/session_expired';
$route['unauthorized'] = 'HandlerPage/unauthorized';
$route['page_not_found'] = 'HandlerPage/page_not_found';
$route['data_not_found'] = 'HandlerPage/data_not_found';
$route['maintenance'] = 'HandlerPage/maintenance';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
