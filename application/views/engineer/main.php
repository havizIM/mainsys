
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="<?= base_url() ?>assets/images/logo-rsi.png">
    <title>MainSys | ENGINEER</title>
    <!-- Custom CSS -->

    <link href="<?= base_url() ?>assets/libs/toastr/build/toastr.min.css" rel="stylesheet">
    <link href="<?= base_url() ?>assets/libs/datatables-bs4/datatables.min.css" rel="stylesheet">
    <link href="<?= base_url() ?>assets/libs/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet">
    
    <link href="<?= base_url() ?>assets/libs/fullcalendar/dist/fullcalendar.min.css" rel="stylesheet" />
    <link href="<?= base_url() ?>assets/libs/dropify/dist/css/dropify.min.css" rel="stylesheet" />
    <link href="<?= base_url() ?>assets/extra-libs/calendar/calendar.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/libs/select2/dist/css/select2.min.css">
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/libs/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css">

    
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/libs/loaders/loaders.css">
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/libs/loaders/loaders-palette.css">
    
    <link href="<?= base_url() ?>dist/css/style.min.css" rel="stylesheet">
</head>

<body>
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
                        <i class="ti-menu ti-close"></i>
                    </a>
                    <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== -->
                    <div class="navbar-brand">
                        <a href="index.html" class="logo">
                            <!-- Logo icon -->
                            <b class="logo-icon">
                                <img src="<?= base_url() ?>assets/images/logo-rsi.png" style="width: 20%" alt="homepage" class="dark-logo" />
                                <img src="<?= base_url() ?>assets/images/logo-rsi.png" style="width: 20%" alt="homepage" class="light-logo" />
                            </b>
                            <!--End Logo icon -->
                            <!-- Logo text -->
                            <span class="logo-text">
                                <img src="<?= base_url() ?>assets/images/logo-text-dark.png" style="width: 60%" alt="homepage" class="dark-logo" />
                                <img src="<?= base_url() ?>assets/images/logo-text-light.png" style="width: 60%" class="light-logo" alt="homepage" />
                            </span>
                        </a>
                    </div>
                    <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Toggle which is visible on mobile only -->
                    <!-- ============================================================== -->
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="ti-more"></i>
                    </a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
               <div class="navbar-collapse collapse" id="navbarSupportedContent">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav float-left mr-auto">
                        <li class="nav-item search-box">
                            <!-- SEARCH BOX -->
                        </li>
                    </ul>
                    <!-- ============================================================== -->
                    <!-- Right side toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav float-right">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="<?= $this->session->userdata('information')->photo === null ? base_url('assets/images/user.png') : $this->config->item('api_url').'engineer/file/'.$this->session->userdata('information')->photo ?>" alt="user" class="rounded-circle" width="40" height="40">
                                <span class="m-l-5 font-medium d-none d-sm-inline-block"><?= $this->session->userdata('name') ?> <i class="mdi mdi-chevron-down"></i></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <span class="with-arrow">
                                    <span class="bg-primary"></span>
                                </span>
                                <div class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                                    <div class="">
                                        <img src="<?= $this->session->userdata('information')->photo === null ? base_url('assets/images/user.png') : $this->config->item('api_url').'engineer/file/'.$this->session->userdata('information')->photo ?>" alt="user" class="rounded-circle" width="60" height="60">
                                    </div>
                                    <div class="m-l-10">
                                        <h4 class="m-b-0"><?= $this->session->userdata('information')->full_name ?></h4>
                                        <p class=" m-b-0">Level : <?= $this->session->userdata('roles') ?></p>
                                    </div>
                                </div>
                                <div class="profile-dis scrollable">
                                    <a class="dropdown-item" href="#/setting">
                                        <i class="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item logout" href="javascript:void(0)">
                                        <i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="#/dashboard" aria-expanded="false"><i class="mdi mdi-av-timer"></i><span class="hide-menu">Dashboard</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-calendar"></i><span class="hide-menu">Schedule</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="#/corrective_schedule" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Corrective</span></a></li>
                                <li class="sidebar-item"><a href="#/preventive_schedule" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Preventive</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-notification-clear-all"></i><span class="hide-menu">Report</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="#/corrective_report" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Corrective</span></a></li>
                                <li class="sidebar-item"><a href="#/preventive_report" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Preventive</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        
        <div class="page-wrapper" id="app_content"></div>
    </div>

    <aside class="customizer">
        <a href="javascript:void(0)" class="service-panel-toggle" id="btn_panel"><i class="fa fa-spin fa-cog"></i></a>
        <div class="customizer-body">
            <ul class="nav customizer-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="mdi mdi-wrench font-20"></i> <br/> Setting</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="mdi mdi-star-circle font-20"></i> <br/> Logs</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="p-15 border-bottom">
                        <!-- Sidebar -->
                        <h5 class="font-medium m-b-10 m-t-10">Layout Settings</h5>
                        <div class="custom-control custom-checkbox m-t-10">
                            <input type="checkbox" class="custom-control-input" name="theme-view" id="theme-view">
                            <label class="custom-control-label" for="theme-view">Dark Theme</label>
                        </div>
                        <div class="custom-control custom-checkbox m-t-10">
                            <input type="checkbox" class="custom-control-input sidebartoggler" name="collapssidebar" id="collapssidebar">
                            <label class="custom-control-label" for="collapssidebar">Collapse Sidebar</label>
                        </div>
                        <div class="custom-control custom-checkbox m-t-10">
                            <input type="checkbox" class="custom-control-input" name="sidebar-position" id="sidebar-position">
                            <label class="custom-control-label" for="sidebar-position">Fixed Sidebar</label>
                        </div>
                        <div class="custom-control custom-checkbox m-t-10">
                            <input type="checkbox" class="custom-control-input" name="header-position" id="header-position">
                            <label class="custom-control-label" for="header-position">Fixed Header</label>
                        </div>
                        <div class="custom-control custom-checkbox m-t-10">
                            <input type="checkbox" class="custom-control-input" name="boxed-layout" id="boxed-layout">
                            <label class="custom-control-label" for="boxed-layout">Boxed Layout</label>
                        </div>
                    </div>
                    <div class="p-15 border-bottom">
                        <!-- Logo BG -->
                        <h5 class="font-medium m-b-10 m-t-10">Logo Backgrounds</h5>
                        <ul class="theme-color">
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin1"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin2"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin3"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin4"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin5"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-logobg="skin6"></a></li>
                        </ul>
                        <!-- Logo BG -->
                    </div>
                    <div class="p-15 border-bottom">
                        <!-- Navbar BG -->
                        <h5 class="font-medium m-b-10 m-t-10">Navbar Backgrounds</h5>
                        <ul class="theme-color">
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin1"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin2"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin3"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin4"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin5"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-navbarbg="skin6"></a></li>
                        </ul>
                        <!-- Navbar BG -->
                    </div>
                    <div class="p-15 border-bottom">
                        <!-- Logo BG -->
                        <h5 class="font-medium m-b-10 m-t-10">Sidebar Backgrounds</h5>
                        <ul class="theme-color">
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin1"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin2"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin3"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin4"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin5"></a></li>
                            <li class="theme-item"><a href="javascript:void(0)" class="theme-link" data-sidebarbg="skin6"></a></li>
                        </ul>
                        <!-- Logo BG -->
                    </div>
                </div>
                <div class="tab-pane fade p-15" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <h6 class="m-t-20 m-b-20">Activity Timeline</h6>
                    <div id="sidebar_log">
                        <div class="text-center">
                            <i class="fa fa-spinner fa-spin fa-3x mb-3"></i>
                            <h3>Loading</h3>
                            <h6>Silahkan tunggu...</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    <script src="<?= base_url() ?>assets/libs/jquery/dist/jquery.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/popper.js/dist/umd/popper.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>dist/js/app.min.js"></script>
    <script src="<?= base_url() ?>dist/js/app.init.horizontal.js"></script>
    <script src="<?= base_url() ?>dist/js/app-style-switcher.horizontal.js"></script>
    <script src="<?= base_url() ?>assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="<?= base_url() ?>assets/extra-libs/sparkline/sparkline.js"></script>
    <script src="<?= base_url() ?>dist/js/waves.js"></script>
    <script src="<?= base_url() ?>dist/js/sidebarmenu.js"></script>
    <script src="<?= base_url() ?>dist/js/custom.min.js"></script>
    
    <script src="<?= base_url() ?>assets/libs/block-ui/jquery.blockUI.js"></script>
    <script src="<?= base_url() ?>assets/libs/toastr/build/toastr.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/datatables-bs4/datatables.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/moment/min/moment.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/fullcalendar/dist/fullcalendar.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/inputmask/dist/min/jquery.inputmask.bundle.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/nicescroll/jquery.nicescroll.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/dropify/dist/js/dropify.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/select2/dist/js/select2.full.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/select2/dist/js/select2.min.js"></script>
    <script src="<?= base_url() ?>dist/js/pages/samplepages/jquery.PrintArea.js"></script>
    <script src="<?= base_url() ?>assets/libs/typeahead.js/dist/typeahead.jquery.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/typeahead.js/dist/bloodhound.min.js"></script>
    <script src="<?= base_url() ?>assets/libs/chart.js/dist/Chart.min.js"></script>
    
	<script src="https://cdnjs.cloudflare.com/ajax/libs/signature_pad/1.5.3/signature_pad.min.js" integrity="sha256-5ZC+204OMIMsO0Z7If/CTSNRdqSh1G+2XmfZCjbQCP8=" crossorigin="anonymous"></script>


    <script src="<?= base_url() ?>src/setting.js"></script>
    <script src="<?= base_url() ?>src/engineer/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            mainController.init('<?= $this->session->userdata('api_token') ?>')
        })
    </script>
</body>

</html>