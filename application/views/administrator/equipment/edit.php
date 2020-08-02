<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">Edit Equipment</h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#/dashboard">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a id="link_back">Partner</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                        <li class="breadcrumb-item active" aria-current="page"><?= $id ?></li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row">

        <div class="col-12">
            <div class="card" id="edit_container">
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
    All Rights Reserved by Universitas Esa Unggul. Designed and Developed by
    <a>Ferry Setiawan</a>.
</footer>

<script type="module">
    import partnerController from '<?= base_url() ?>src/administrator/modules/partner.js';
    partnerController.editEquipment('<?= $this->session->userdata('api_token') ?>', <?= $id ?>)
</script>