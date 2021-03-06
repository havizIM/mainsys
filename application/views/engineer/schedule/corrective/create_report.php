<div class="page-breadcrumb">
    <div class="row">
        <div class="col-lg-5 col-12 align-self-center">
            <h4 class="page-title">Create Corrective Report</h4>
        </div>
        <div class="col-lg-7 col-12 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#/dashboard">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#/corrective_report">Corrective Report</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Create Report</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row">

        <div class="col-12">
            <div class="card" id="detail_container">
                <div class="card-body" id="main_content">
                    <div class="text-center">
                        <i class="fa fa-spinner fa-spin fa-5x mb-3"></i>
                        <h1>Loading</h1>
                        <h4>Silahkan tunggu...</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer text-center">
    Develop Using Framework MIT License Codeigniter copyright (c) 2014 - 2019. British Columbia Institute of Technology.
</footer>

<script type="module">
    import correctiveReportController from '<?= base_url() ?>src/engineer/modules/corrective_report.js';
    correctiveReportController.add('<?= $this->session->userdata('api_token') ?>', <?= $id ?>)
</script>