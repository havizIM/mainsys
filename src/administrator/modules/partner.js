const partnerUI = ((SET) => {
    let count = 0

    return {
        resetCount: () => {
            count = 0
        },

        renderRowPrevetive: () => {

            count += 1

            let html = `
                <tr id="row_${count}">
                    <td>
                        <textarea name="description[${count}]" id="description_${count}" data-id="${count}" class="form-control" rows="1" required></textarea>
                    </td>
                    <td>
                        <select class="form-control" id="periode_${count}" name="periode[${count}]" data-id="${count}">
                            <option value="">- Choose -</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Quartal">Quartal</option>
                            <option value="Semester">Semester</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </td>
                    <td>
                        <textarea name="tools[${count}]" id="tools_${count}" data-id="${count}" class="form-control" rows="1"></textarea>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-md btn-remove btn_remove_row" type="button" data-id="${count}" data-remove="true"><i class="fa fa-times"></i></button>
                    </td>
                </tr>
            `

            $('#t_detail tbody').append(html)

        },

        renderDetail: data => {
            let html = `
                <div class="row">
                    <div class="col-md-8">
                            <div class="p-20">
                                <fieldset>
                                    <legend><u>Information</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Partner Name</b></div>
                                                    <div>${SET.replaceNull(data.partner_name)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Address</b></div>
                                                    <div>${SET.replaceNull(data.address)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>City</b></div>
                                                    <div>${SET.replaceNull(data.city !== null ? data.city.city : '-')}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Province</b></div>
                                                    <div>${SET.replaceNull(data.province !== null ? data.province.province : '-')}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Phone</b></div>
                                                    <div>${SET.replaceNull(data.phone)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Email</b></div>
                                                    <div>${SET.replaceNull(data.email)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Fax</b></div>
                                                    <div>${SET.replaceNull(data.fax)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Handphone</b></div>
                                                    <div>${SET.replaceNull(data.handphone)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>NPWP</b></div>
                                                    <div>${SET.replaceNull(data.npwp)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Website</b></div>
                                                    <div>${SET.replaceNull(data.website)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Other Information</b></div>
                                                    <div>${SET.replaceNull(data.other_information)}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>

                                
                            </div>

                        
                    </div>

                    <div class="col-md-4">
                        <p class="p-20">
                            <label>Logo</label>
                            <img src="${data.logo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}partner/file/${data.logo}`}" class="img-fluid" alt="">
                        </p>
                        <div class="form-group mt-5">
                            <a href="#/partner/edit/${data.id}" class="btn btn-md btn-block btn-success">Edit</a>
                            <button class="btn btn-md btn-block btn-danger btn-delete" data-id="${data.id}" data-name="${data.partner_name}" type="button">Delete</button>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#user" role="tab"><span class="hidden-sm-up"><i class="ti-info"></i></span> <span class="hidden-xs-down">User</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#category" role="tab"><span class="hidden-sm-up"><i class="ti-wallet"></i></span> <span class="hidden-xs-down">Category</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#building" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-checkbox-multiple-blank-outline"></i></span> <span class="hidden-xs-down">Building</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#procedure" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-keyboard-return"></i></span> <span class="hidden-xs-down">Procedure</span></a></li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#equipment" role="tab"><span class="hidden-sm-up"><i class="mdi mdi-checkbox-multiple-blank-outline"></i></span> <span class="hidden-xs-down">Equipment</span></a> </li>
                        </ul>

                        <div class="tab-content">

                            <div class="tab-pane active p-20" id="user" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total User</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_user">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_user" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Full Name</th>
                                                        <th>Address</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>Position</th>
                                                        <th>Status</th>
                                                        <th>Settings</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane p-20" id="category" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Category</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_category">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_category" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Category Name</th>
                                                        <th>Other Information</th>
                                                        <th>Settings</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane p-20" id="building" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Building</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_building">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_building" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Building Name</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>Address</th>
                                                        <th>Type</th>
                                                        <th>Settings</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane p-20" id="procedure" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Procedure</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_procedure">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_procedure" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Indentifier Name</th>
                                                        <th>Type</th>
                                                        <th>Other Information</th>
                                                        <th>Settings</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane p-20" id="equipment" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Equipment</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_equipment">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_equipment" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>SKU</th>
                                                        <th>Equipment Name</th>
                                                        <th>Category</th>
                                                        <th>Building</th>
                                                        <th>Settings</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderAddUser: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_add">
                            <div class="row">
                                <div class="col-md-8">
                                        <div class="form-group">
                                            <label for="contact_name">Full Name</label>
                                            <input type="text" class="form-control" id="full_name" name="full_name">
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Position</label>
                                            <input type="text" class="form-control" id="position" name="position">
                                        </div>
                                        <div class="form-group">
                                            <label for="pic">Phone</label>
                                            <input type="text" class="form-control" id="phone" name="phone">
                                        </div>
                                        <div class="form-group">
                                            <label for="pic">Email</label>
                                            <input type="text" class="form-control" id="email" name="email">
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Address</label>
                                            <textarea class="form-control" id="address" name="address"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information"></textarea>
                                        </div>
                                        
                                </div>
                                <div class="col-md-4">
                                    <fieldset>
                                        <legend>Partner</legend>
                                        <div class="form-group">
                                            <label for="contact_name">Partner Name</label>
                                            <input type="hidden" name="partner_id" id="partner_id" value="${data.id }">
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner_name}" readonly>
                                        </div>
                                    </fieldset>

                                    <br>

                                    <fieldset>
                                        <legend>Account</legend>
                                        <div class="form-group">
                                            <label for="contact_name">Username</label>
                                            <input type="text" class="form-control" id="username" name="username">
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Status</label>
                                            <select class="form-control" id="active" name="active">
                                                <option value="">-- Choose --</option>
                                                <option value="Y">Active</option>
                                                <option value="N">Inactive</option>
                                            </select>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-info" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderDetailPartnerUser: data => {
            let html = `
                <div class="row">
                    <div class="col-md-8">
                        
                            <div class="p-20">
                                <fieldset>
                                    <legend><u>Information</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Partner Name</b></div>
                                                    <div><a href="#/partner/${data.partner.id}">${data.partner.partner_name}</a></div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Full Name</b></div>
                                                    <div>${SET.replaceNull(data.full_name)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Address</b></div>
                                                    <div>${SET.replaceNull(data.address)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Phone</b></div>
                                                    <div>${SET.replaceNull(data.phone)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Email</b></div>
                                                    <div>${SET.replaceNull(data.user.email)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Other Information</b></div>
                                                    <div>${SET.replaceNull(data.other_information)}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>

                                    <fieldset>
                                        <legend><u>Account</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Username</b></div>
                                                    <div>${SET.replaceNull(data.user.username)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Roles</b></div>
                                                    <div>${SET.replaceNull(data.user.roles)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Status</b></div>
                                                    <div>${data.user.active === 'Y' ? '<b class="text-success">Active</b>' : '<b class="text-danger">Inactive</b>'}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>
                            </div>

                        
                    </div>

                    <div class="col-md-4">
                        <div class="form-group mt-5">
                            <a href="#/partner/user/edit/${data.id}" class="btn btn-md btn-block btn-success">Edit</a>
                            <button class="btn btn-md btn-block btn-danger btn-delete" data-id="${data.id}" data-name="${data.full_name}" type="button">Delete</button>
                        </div>
                    </div>

                </div>
            `

            $('#main_content').html(html)
        },

        renderAddCategory: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_add">
                            <div class="row">
                                <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="contact_name">Partner</label>
                                            <input type="hidden" id="partner_id" name="partner_id" value="${data.id}">
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner_name}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Category Name</label>
                                            <input type="text" class="form-control" id="category_name" name="category_name">
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information"></textarea>
                                        </div>

                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-info" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderAddBuilding: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_add">
                            <div class="row">
                                <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="contact_name">Partner Name</label>
                                            <input type="hidden" name="partner_id" id="partner_id" value="${data.id}">
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner_name}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Building Name</label>
                                            <input type="text" class="form-control" id="building_name" name="building_name">
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Type</label>
                                            <input type="text" class="form-control" id="type" name="type">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-4">
                                                <label for="pic">Phone</label>
                                            <input type="text" class="form-control" id="phone" name="phone">
                                            </div>
                                            <div class="col-md-4">
                                                <label for="pic">Fax</label>
                                                <input type="text" class="form-control" id="fax" name="fax">
                                            </div>
                                            <div class="col-md-4">
                                                <label for="pic">Email</label>
                                                <input type="text" class="form-control" id="email" name="email">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Longitude</label>
                                                <input type="number" class="form-control" id="longitude" name="longitude">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Latitude</label>
                                                <input type="number" class="form-control" id="latitude" name="latitude">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Address</label>
                                            <textarea class="form-control" id="address" name="address"></textarea>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="phone">City</label>
                                                <select class="form-control" id="city_id" name="city_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="fax">Province</label>
                                                <select class="form-control" id="province_id" name="province_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information"></textarea>
                                        </div>

                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-info" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderDetailBuilding: data => {
            let html = `
                <div class="row">
                    <div class="col-md-8">
                        
                            <div class="p-20">
                                <fieldset>
                                    <legend><u>Information</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Partner Name</b></div>
                                                    <div><a href="#/partner/${data.partner.id}">${data.partner.partner_name}</a></div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Building Name</b></div>
                                                    <div>${SET.replaceNull(data.building_code)} / ${SET.replaceNull(data.building_name)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Address</b></div>
                                                    <div>${SET.replaceNull(data.address)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>City</b></div>
                                                    <div>${SET.replaceNull(data.city !== null ? data.city.city : '-')}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Province</b></div>
                                                    <div>${SET.replaceNull(data.province !== null ? data.province.province : '-')}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Type</b></div>
                                                    <div>${SET.replaceNull(data.type)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Email</b></div>
                                                    <div>${SET.replaceNull(data.email)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Phone</b></div>
                                                    <div>${SET.replaceNull(data.phone)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Fax</b></div>
                                                    <div>${SET.replaceNull(data.fax)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Longitude</b></div>
                                                    <div>${SET.replaceNull(data.longitude)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Latitude</b></div>
                                                    <div>${SET.replaceNull(data.latitude)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Other Information</b></div>
                                                    <div>${SET.replaceNull(data.other_information)}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>
                            </div>

                        
                    </div>

                    <div class="col-md-4">
                        <img src="${SET.baseURL()}assets/images/building.svg" class="img-fluid mt-5">
                        <div class="form-group mt-5">
                            <a href="#/partner/building/edit/${data.id}" class="btn btn-md btn-block btn-success">Edit</a>
                            <button class="btn btn-md btn-block btn-danger btn-delete" data-id="${data.id}" data-name="${data.building_name}" type="button">Delete</button>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Schedules</u></legend>
                                <div id="calendar"></div>
                            </fieldset>
                        </div>
                    </div>

                </div>
            `

            $('#main_content').html(html)
        },

        renderAddProcedure: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_add">
                            <div class="row">
                                <div class="col-md-12">

                                    <fieldset>
                                        <legend><u>Procedure</u></legend>

                                        <div class="form-group">
                                            <label for="contact_name">Partner</label>
                                            <input type="hidden" id="partner_id" name="partner_id" value="${data.id}">
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner_name}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Identifier Name</label>
                                            <input type="text" class="form-control" id="identifier_name" name="identifier_name">
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Type</label>
                                            <input type="text" class="form-control" id="type" name="type">
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information"></textarea>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <legend><u>Preventive Procedure</u></legend>

                                        <table class="table" id="t_detail">
                                            <thead>
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Periode</th>
                                                    <th>Tools</th>
                                                    <th>
                                                        <button class="btn btn-info btn-md btn_add_row" type="button" id="btn_add_row"><i class="fa fa-plus"></i></button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr id="row_0">
                                                    <td>
                                                        <textarea name="description[0]" id="description_0" data-id="0" class="form-control" rows="1" required></textarea>
                                                    </td>
                                                    <td>
                                                        <select class="form-control" id="periode_0" name="periode[0]" data-id="0" required>
                                                            <option value="">- Choose -</option>
                                                            <option value="Weekly">Weekly</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Quartal">Quartal</option>
                                                            <option value="Semester">Semester</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <textarea name="tools[0]" id="tools_0" data-id="0" class="form-control" rows="1"></textarea>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </fieldset>

                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-info" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderDetailProcedure: data => {

            let grouped = data.preventive_procedures.reduce(function (r, a) {
                r[a.periode] = r[a.periode] || [];
                r[a.periode].push(a);
                return r;
            }, Object.create(null));

            let html = `
                <div class="row">
                    <div class="col-md-8">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Details</u></legend>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div><b>Identifier Name</b></div>
                                                <div>${SET.replaceNull(data.identifier_name)}</div>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div><b>Type</b></div>
                                                <div>${SET.replaceNull(data.type)}</div>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div><b>Other Information</b></div>
                                                <div>${SET.replaceNull(data.other_information)}</div>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div><b>Partner</b></div>
                                                <div><a href="#/partner/${data.partner.id}">${data.partner.partner_name}</a></div>
                                            </div>
                                        </div>
                                    </p>
                                </fieldset>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group mt-5">
                            <a href="#/partner/procedure/edit/${data.id}" class="btn btn-md btn-block btn-success">Edit</a>
                            <button class="btn btn-md btn-block btn-danger btn-delete" data-id="${data.id}" data-name="${data.identifier_name}" type="button">Delete</button>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Preventive Procedure</u></legend>

                                ${
                                    Object.keys(grouped).map(function (key, index) {
                                        let row = ''

                                        row += `
                                            <h4 class="card-title">${key}</h4>
                                        `

                                        grouped[key].map(v => {
                                            row += `
                                                <div class="list-group">
                                                    <a href="javascript:void(0)" class="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div class="d-flex w-100 justify-content-between">
                                                            <h5 class="mb-1 text-black">${v.description}</h5>
                                                        </div>
                                                        <p class="mb-1">
                                                            Tools : <br>
                                                            <div class="pl-3">${v.tools}</div>
                                                        </p>
                                                    </a>
                                                </div>
                                            `
                                        })

                                        return row
                                    })
                                }
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            `


            $('#main_content').html(html)
        },

        renderAddEquipment: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_add">
                            <div class="row">
                                <div class="col-md-8">
                                        <div class="form-group">
                                            <label for="contact_name">SKU</label>
                                            <input type="text" class="form-control" id="sku" name="sku">
                                        </div>
                                        <div class="form-group">
                                            <label for="pic">Equipment Name</label>
                                            <input type="text" class="form-control" id="equipment_name" name="equipment_name">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Category</label>
                                                <select class="form-control" id="category_id" name="category_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                    ${data.categories !== null ? data.categories.map(v => {
                                                        return `
                                                            <option value="${v.id}">${v.category_name}</option>
                                                        `
                                                    }).join(' ') : ''}
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Building</label>
                                                <select class="form-control" id="building_id" name="building_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                    ${data.buildings !== null ? data.buildings.map(v => {
                                                        return `
                                                            <option value="${v.id}">${v.building_code !== null ? v.building_code+' - ' : ''}${v.building_name}</option>
                                                        `
                                                    }).join(' ') : ''}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Brand</label>
                                                <input type="text" class="form-control" id="brand" name="brand">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Type</label>
                                                <input type="text" class="form-control" id="type" name="type">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Location</label>
                                            <textarea class="form-control" id="location" name="location"></textarea>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information"></textarea>
                                        </div>
                                        
                                </div>
                                <div class="col-md-4">
                                    <fieldset>
                                        <div class="form-group">
                                            <label for="contact_name">Partner Name</label>
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner_name}" readonly>
                                        </div>
                                    </fieldset>

                                    <div class="form-group">
                                        <label for="picture">Photo</label>
                                        <input type="file" class="dropify" name="photo" id="photo">
                                    </div>
                                    <div class="form-group">
                                        <label for="pic">Procedure</label>
                                        <select class="form-control" id="procedure_id" name="procedure_id">
                                            <option value="" disabled="" selected="">-- Choose --</option>
                                            ${data.procedures !== null ? data.procedures.map(v => {
                                                return `
                                                    <option value="${v.id}">${v.identifier_name} | ${v.type}</option>
                                                `
                                            }).join(' ') : ''}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <a class="btn btn-md btn-danger" href="#/administrator">Cancel</a>
                                        <button class="btn btn-md btn-info" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderDetailEquipment: data => {
            let no = 1;

            let html = `
                <div class="row">
                    <div class="col-md-8">
                            <div class="p-20">
                                <fieldset>
                                    <legend><u>Information</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>SKU</b></div>
                                                    <div>${SET.replaceNull(data.sku)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Equipment Name</b></div>
                                                    <div>${SET.replaceNull(data.equipment_name)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Type</b></div>
                                                    <div>${SET.replaceNull(data.type)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Brand</b></div>
                                                    <div>${SET.replaceNull(data.brand)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Location</b></div>
                                                    <div>${SET.replaceNull(data.location)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Category</b></div>
                                                    <div>${SET.replaceNull(data.category.category_name)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Other Information</b></div>
                                                    <div>${SET.replaceNull(data.other_information)}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>

                                    <fieldset>
                                        <legend><u>Building</u></legend>

                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Partner Name</b></div>
                                                    <div><a href="#/partner/${data.building.partner.id}">${data.building.partner.partner_name}</a></div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Building Name</b></div>
                                                    <div><a href="#/partner/building/${data.building.id}">${data.building.building_code} - ${data.building.building_name}</a></div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Address</b></div>
                                                    <div>${SET.replaceNull(data.building.address)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div><b>Phone</b></div>
                                                        <div>${SET.replaceNull(data.building.phone)}</div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div><b>Fax</b></div>
                                                        <div>${SET.replaceNull(data.building.fax)}</div>
                                                    </div>
                                                </div>
                                            </p>


                                    </fieldset>

                                
                            </div>

                        
                    </div>

                    <div class="col-md-4">
                        <fieldset>
                            <legend><u>Procedure</u></legend>
                            <div><a href="#/partner/procedure/${data.procedure.id}">Lihat Procedure</a></div>
                        </fieldset>

                        <p class="p-20">
                            <label>Picture</label>
                            <img src="${data.photo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}equipment/file/${data.photo}`}" class="img-fluid" alt="">
                        </p>
                        <div class="form-group mt-5">
                            <a href="#/partner/edit/${data.id}" class="btn btn-md btn-block btn-success">Edit</a>
                            <button class="btn btn-md btn-block btn-danger btn-delete" data-id="${data.id}" data-name="${data.partner_name}" type="button">Delete</button>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#preventive" role="tab"><span class="hidden-sm-up"><i class="ti-wallet"></i></span> <span class="hidden-xs-down">Preventive</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#corrective" role="tab"><span class="hidden-sm-up"><i class="ti-info"></i></span> <span class="hidden-xs-down">Corrective</span></a> </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active p-20" id="preventive" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Preventive</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_preventive">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_preventive" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Report Number</th>
                                                        <th>Date</th>
                                                        <th>Approved By</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane p-20" id="corrective" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Corrective</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_corrective">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_corrective" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Report Number</th>
                                                        <th>Date</th>
                                                        <th>Approved By</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderEdit: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_edit">
                            <div class="row">
                                <div class="col-md-8">
                                        <div class="form-group">
                                            <label for="contact_name">Partner Name</label>
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner_name}">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Phone</label>
                                                <input type="text" class="form-control" id="phone" name="phone" value="${data.phone}">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Fax</label>
                                                <input type="text" class="form-control" id="fax" name="fax" value="${SET.filterNull(data.fax)}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Handphone</label>
                                                <input type="text" class="form-control" id="handphone" name="handphone" value="${SET.filterNull(data.handphone)}">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Email</label>
                                                <input type="text" class="form-control" id="email" name="email" value="${SET.filterNull(data.email)}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Website</label>
                                                <input type="text" class="form-control" id="website" name="website" value="${SET.filterNull(data.website)}">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">NPWP</label>
                                                <input type="text" class="form-control" id="npwp" name="npwp" value="${SET.filterNull(data.npwp)}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Address</label>
                                            <textarea class="form-control" id="address" name="address">${data.address}</textarea>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="phone">City</label>
                                                <select class="form-control" id="city_id" name="city_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="fax">Province</label>
                                                <select class="form-control" id="province_id" name="province_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information">${SET.filterNull(data.other_information)}</textarea>
                                        </div>
                                        
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="picture">Logo</label>
                                        <input type="file" class="dropify" name="logo" id="logo" ${data.logo === null ? '' : `data-default-file="${SET.apiURL()}partner/file/${data.logo}`}">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <input type="hidden" name="_method" id="_method" value="put">
                                        <a class="btn btn-md btn-danger" href="#/partner">Cancel</a>
                                        <button class="btn btn-md btn-success" type="submit">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `
            $('#main_content').html(html)
        },

        renderEditPartnerUser: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_edit">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label for="contact_name">Full Name</label>
                                        <input type="text" class="form-control" id="full_name" name="full_name" value="${data.full_name}">
                                    </div>
                                    <div class="form-group">
                                        <label for="contact_name">Position</label>
                                        <input type="text" class="form-control" id="position" name="position" value="${data.position}">
                                    </div>
                                    <div class="form-group">
                                        <label for="pic">Phone</label>
                                        <input type="text" class="form-control" id="phone" name="phone" value="${data.phone}">
                                    </div>
                                    <div class="form-group">
                                        <label for="pic">Email</label>
                                        <input type="text" class="form-control" id="email" name="email" value="${data.user.email}">
                                    </div>
                                    <div class="form-group">
                                        <label for="memo">Address</label>
                                        <textarea class="form-control" id="address" name="address">${data.address}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="memo">Other Information</label>
                                        <textarea class="form-control" id="other_information" name="other_information">${SET.filterNull(data.other_information)}</textarea>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <fieldset>
                                        <legend>Partner</legend>
                                        <div class="form-group">
                                            <label for="contact_name">Partner Name</label>
                                            <input type="hidden" name="partner_id" id="partner_id" value="${data.partner.id}">
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner.partner_name}" readonly>
                                        </div>
                                    </fieldset>

                                    <br>

                                    <fieldset>
                                        <legend>Account</legend>
                                        <div class="form-group">
                                            <label for="contact_name">Username</label>
                                            <input type="text" class="form-control" id="username" name="username" value="${data.user.username}">
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Status</label>
                                            <select class="form-control" id="active" name="active">
                                                <option value="">-- Choose --</option>
                                                <option value="Y">Active</option>
                                                <option value="N">Inactive</option>
                                            </select>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <input type="hidden" name="_method" id="_method" value="put">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-success" type="submit">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderEditCategory: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_edit">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="contact_name">Partner</label>
                                        <input type="hidden" id="partner_id" name="partner_id" value="${data.partner.id}">
                                        <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner.partner_name}" readonly>
                                    </div>
                                    <div class="form-group">
                                        <label for="contact_name">Category Name</label>
                                        <input type="text" class="form-control" id="category_name" name="category_name" value="${data.category_name}">
                                    </div>
                                    <div class="form-group">
                                        <label for="memo">Other Information</label>
                                        <textarea class="form-control" id="other_information" name="other_information">${SET.filterNull(data.other_information)}</textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <input type="hidden" name="_method" id="_method" value="put">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-success" type="submit">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderEditBuilding: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_edit">
                            <div class="row">
                                <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="contact_name">Partner Name</label>
                                            <input type="hidden" name="partner_id" id="partner_id" value="${data.partner.id}">
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner.partner_name}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Building Name</label>
                                            <input type="text" class="form-control" id="building_name" name="building_name" value="${data.building_name}">
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Type</label>
                                            <input type="text" class="form-control" id="type" name="type" value="${data.type}">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-4">
                                                <label for="pic">Phone</label>
                                            <input type="text" class="form-control" id="phone" name="phone" value="${data.phone}">
                                            </div>
                                            <div class="col-md-4">
                                                <label for="pic">Fax</label>
                                                <input type="text" class="form-control" id="fax" name="fax" value="${SET.filterNull(data.fax)}">
                                            </div>
                                            <div class="col-md-4">
                                                <label for="pic">Email</label>
                                                <input type="text" class="form-control" id="email" name="email" value="${data.email}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Longitude</label>
                                                <input type="number" class="form-control" id="longitude" name="longitude" value="${SET.filterNull(data.longitude)}">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Latitude</label>
                                                <input type="number" class="form-control" id="latitude" name="latitude" value="${SET.filterNull(data.latitude)}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Address</label>
                                            <textarea class="form-control" id="address" name="address">${data.address}</textarea>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="phone">City</label>
                                                <select class="form-control" id="city_id" name="city_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="fax">Province</label>
                                                <select class="form-control" id="province_id" name="province_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information">${SET.filterNull(data.other_information)}</textarea>
                                        </div>

                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <input type="hidden" name="_method" id="_method" value="put">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-success" type="submit">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderEditEquipment: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_edit">
                            <div class="row">
                                <div class="col-md-8">
                                        <div class="form-group">
                                            <label for="contact_name">SKU</label>
                                            <input type="text" class="form-control" id="sku" name="sku" value="${data.sku}">
                                        </div>
                                        <div class="form-group">
                                            <label for="pic">Equipment Name</label>
                                            <input type="text" class="form-control" id="equipment_name" name="equipment_name" value="${data.equipment_name}">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Category</label>
                                                <select class="form-control" id="category_id" name="category_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Building</label>
                                                <select class="form-control" id="building_id" name="building_id">
                                                    <option value="" disabled="" selected="">-- Choose --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="pic">Brand</label>
                                                <input type="text" class="form-control" id="brand" name="brand" value="${SET.filterNull(data.brand)}">
                                            </div>
                                            <div class="col-md-6">
                                                <label for="pic">Type</label>
                                                <input type="text" class="form-control" id="type" name="type" value="${SET.filterNull(data.type)}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Location</label>
                                            <textarea class="form-control" id="location" name="location">${SET.filterNull(data.location)}</textarea>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information">${SET.filterNull(data.other_information)}</textarea>
                                        </div>
                                        
                                </div>
                                <div class="col-md-4">
                                    <fieldset>
                                        <div class="form-group">
                                            <label for="contact_name">Partner Name</label>
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.building.partner.partner_name}" readonly>
                                        </div>
                                    </fieldset>

                                    <div class="form-group">
                                        <label for="picture">Photo</label>
                                        <input type="file" class="dropify" name="photo" id="photo" ${data.photo === null ? '' : `data-default-file="${SET.apiURL()}equipment/file/${data.photo}`}">
                                    </div>
                                    <div class="form-group">
                                        <label for="pic">Procedure</label>
                                        <select class="form-control" id="procedure_id" name="procedure_id">
                                            <option value="" disabled="" selected="">-- Choose --</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <input type="hidden" name="_method" id="_method" value="put">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-success" type="submit">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },

        renderEditProcedure: data => {
            let periode = ['Weekly', 'Monthly', 'Quartal', 'Semester', 'Yearly'];

            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_edit">
                            <div class="row">
                                <div class="col-md-12">

                                    <fieldset>
                                        <legend><u>Procedure</u></legend>

                                        <div class="form-group">
                                            <label for="contact_name">Partner</label>
                                            <input type="hidden" id="partner_id" name="partner_id" value="${data.partner.id}">
                                            <input type="text" class="form-control" id="partner_name" name="partner_name" value="${data.partner.partner_name}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Identifier Name</label>
                                            <input type="text" class="form-control" id="identifier_name" name="identifier_name" value="${data.identifier_name}">
                                        </div>
                                        <div class="form-group">
                                            <label for="contact_name">Type</label>
                                            <input type="text" class="form-control" id="type" name="type" value="${SET.filterNull(data.type)}">
                                        </div>
                                        <div class="form-group">
                                            <label for="memo">Other Information</label>
                                            <textarea class="form-control" id="other_information" name="other_information">${SET.filterNull(data.other_information)}</textarea>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <legend><u>Preventive Procedure</u></legend>

                                        <table class="table" id="t_detail">
                                            <thead>
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Periode</th>
                                                    <th>Tools</th>
                                                    <th>
                                                        <button class="btn btn-info btn-md btn_add_row" type="button" id="btn_add_row"><i class="fa fa-plus"></i></button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${data.preventive_procedures.map((v, index) => {
                                                    count += 1;

                                                    return `
                                                        <tr id="row_${count}">
                                                            <td>
                                                                <textarea name="description[${count}]" id="description_${count}" data-id="${count}" class="form-control" rows="1" required>${v.description}</textarea>
                                                            </td>
                                                            <td>
                                                                <select class="form-control" id="periode_${count}" name="periode[${count}]" data-id="${count}" required>
                                                                    <option value="">- Choose -</option>
                                                                    ${periode.map(x => {
                                                                        return `<option value="${x}" ${x === v.periode ? 'selected' : ''}>${x}</option>`
                                                                    }).join('')}
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <textarea name="tools[${count}]" id="tools_${count}" data-id="${count}" class="form-control" rows="1">${SET.filterNull(v.tools)}</textarea>
                                                            </td>
                                                            <td>
                                                                ${index !== 0 ? `<button class="btn btn-danger btn-md btn-remove btn_remove_row" type="button" data-id="${count}" data-remove="true"><i class="fa fa-times"></i></button>` : ''}
                                                            </td>
                                                        </tr>
                                                    `
                                                }).join('')}
                                            </tbody>
                                        </table>
                                    </fieldset>

                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-right">
                                        <input type="hidden" name="_method" id="_method" value="put">
                                        <a class="btn btn-md btn-danger" href="#/partner/${data.id}">Cancel</a>
                                        <button class="btn btn-md btn-success" type="submit">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },
    }
})(settingController)

const partnerController = ((SET, DT, UI, LU) => {

    const _editProcedureObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#edit_container")

        let observer = new MutationObserver(function (mutations, observer) {
            if (container.contains($('#form_edit')[0])) {
                _addRow()
                _removeRow()

                _submitEditProcedure(TOKEN, id)
            }

            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitEditProcedure = (TOKEN, id) => {
        $('#form_edit').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                partner_id: 'required',
                identifier_name: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}procedure/${id}`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#edit_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/procedure/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#edit_container')
                    }
                })
            }
        })
    }

    const _editEquipmentObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#edit_container")

        let observer = new MutationObserver(function (mutations, observer) {
            if (container.contains($('#form_edit')[0])) {
                $('.dropify').dropify()

                $('#category_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}category`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                                partner: data.building.partner.id,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.category_name
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    }
                });

                let option = new Option(data.category.category_name, data.category.id, true, true);
                $('#category_id').append(option).trigger('change');

                $('#building_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}building`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                                partner: data.building.partner.id,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.building_code + ' | ' + v.building_name
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    },
                });

                let option2 = new Option(`${data.building.building_code} | ${data.building.building_name}`, data.building.id, true, true);
                $('#building_id').append(option2).trigger('change');

                $('#procedure_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}procedure`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                                partner: data.building.partner.id,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.identifier_name + ' | ' + v.type
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    },
                });

                let option3 = new Option(`${data.procedure.identifier_name} | ${data.procedure.type}`, data.procedure.id, true, true);
                $('#procedure_id').append(option3).trigger('change');

                _submitEditEquipment(TOKEN, id)
            }

            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitEditEquipment = (TOKEN, id) => {
        $('#form_edit').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                sku: 'required',
                equipment_name: 'required',
                building_id: 'required',
                category_id: 'required',
                procedure_id: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}equipment/${id}`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#edit_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/equipment/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#edit_container')
                    }
                })
            }
        })
    }

    const _editBuildingObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#edit_container")

        let observer = new MutationObserver(function (mutations, observer) {
            if (container.contains($('#form_edit')[0])) {

                $('#city_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}city`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.city
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    }
                });

                let option = new Option(data.city.city, data.city.id, true, true);
                $('#city_id').append(option).trigger('change');

                $('#province_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}province`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.province
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    },
                });

                let option2 = new Option(data.province.province, data.province.id, true, true);
                $('#province_id').append(option2).trigger('change');

                _submitEditBuilding(TOKEN, id)
            }

            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitEditBuilding = (TOKEN, id) => {
        $('#form_edit').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                building_name: 'required',
                phone: 'required',
                address: 'required',
                city_id: 'required',
                province_id: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}building/${id}`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#edit_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/building/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#edit_container')
                    }
                })
            }
        })
    }

    const _editCategoryObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#edit_container")

        let observer = new MutationObserver(function (mutations, observer) {
            if (container.contains($('#form_edit')[0])) {
                _submitEditCategory(TOKEN, id)
            }

            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitEditCategory = (TOKEN, id) => {
        $('#form_edit').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                partner_id: 'required',
                category_name: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}category/${id}`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#edit_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/${res.results.partner_id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#edit_container')
                    }
                })
            }
        })
    }

    const _editObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#edit_container")

        let observer = new MutationObserver(function (mutations, observer) {
            if (container.contains($('#form_edit')[0])) {
                $('.dropify').dropify();

                $('#city_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}city`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.city
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    }
                });

                let option = new Option(data.city.city, data.city.id, true, true);
                $('#city_id').append(option).trigger('change');

                $('#province_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}province`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.province
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    },
                });

                let option2 = new Option(data.province.province, data.province.id, true, true);
                $('#province_id').append(option2).trigger('change');


                _submitEdit(TOKEN, id)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitEdit = (TOKEN, id) => {
        $('#form_edit').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                partner_name: 'required',
                phone: 'required',
                email: 'required',
                address: 'required',
                city_id: 'required',
                province_id: 'required'
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}partner/${id}`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#edit_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#edit_container')
                    }
                })
            }
        })
    }

    const _editPartnerUserObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#edit_container")

        let observer = new MutationObserver(function (mutations, observer) {
            if (container.contains($('#form_edit')[0])) {
                $('#active').val(data.user.active)

                _submitEditPartnerUser(TOKEN, id)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitEditPartnerUser = (TOKEN, id) => {
        $('#form_edit').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                full_name: 'required',
                phone: 'required',
                email: 'required',
                username: 'required',
                active: 'required'
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}partner_user/${id}`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#edit_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/user/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#edit_container')
                    }
                })
            }
        })
    }

    const _openDeleteDetail = (parent, callback) => {
        $(parent).on('click', '.btn-delete-detail', function () {
            let id = $(this).data('id')
            let name = $(this).data('name')
            let title = $(this).data('title')
            let link = $(this).data('link')

            $('#delete_id_detail').val(id)
            $('#delete_desc_detail').text(name)

            $('#delete_title').text(title)
            $('#modal_delete_detail').modal('show')
            callback({
                id,
                name,
                title,
                link
            })
        })
    }

    const _submitDeleteDetail = (TOKEN, info, callback) => {
        $('#form_delete_detail').on('submit', function (e) {
            e.preventDefault()

            let id = $('#delete_id_detail').val()

            if (id === '') {
                toastr.error('Data cannot be proccessed', 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            } else {
                $.ajax({
                    url: `${SET.apiURL()}${info.link}/${info.id}`,
                    type: 'DELETE',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                        SET.contentLoader('.modal-content')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        callback(res)
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('.modal-content')
                    }
                })
            }
        })
    }

    const _openDelete = parent => {
        $(parent).on('click', '.btn-delete', function () {
            let id = $(this).data('id')
            let name = $(this).data('name')

            $('#delete_id').val(id)
            $('#delete_desc').text(name)

            $('#modal_delete').modal('show')
        })
    }

    const _submitDelete = (TOKEN, callback) => {
        $('#form_delete').on('submit', function (e) {
            e.preventDefault()

            let id = $('#delete_id').val()

            if (id === '') {
                toastr.error('Data cannot be proccessed', 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            } else {
                $.ajax({
                    url: `${SET.apiURL()}partner/${id}`,
                    type: 'DELETE',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                        SET.contentLoader('.modal-content')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        callback(res)
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('.modal-content')
                    }
                })
            }
        })
    }

    const _submitAdd = TOKEN => {
        $('#form_add').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                partner_name: 'required',
                phone: 'required',
                email: 'required',
                address: 'required',
                city_id: 'required',
                province_id: 'required'
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}partner`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#add_container')
                    }
                })
            }
        })
    }


    const _fetchPartner = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}partner/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _detailObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('#t_user')[0])) {

                $('#count_user').text(data.partner_users.length)

                const table = $('#t_user').DataTable({
                    columnDefs: [
                        {
                            targets: [6],
                            orderable: false
                        },
                        {
                            targets: [6],
                            searchable: false
                        }
                    ],
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'B><'col-md-6'f>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    buttons: {
                        dom: {
                            button: {
                                tag: 'button',
                                className: 'btn btn-md btn-primary my-action'
                            }
                        },
                        buttons: [
                            {
                                extend: 'collection',
                                text: '<i class="fa fa-download"></i> ',
                                titleAttr: 'Export Data',
                                buttons: [
                                    {
                                        extend: 'pdfHtml5',
                                        text: 'PDF',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3, 4, 5]
                                        },
                                        filename: 'DATA_USER',
                                        title: 'Data User',
                                    },
                                    {
                                        extend: 'excelHtml5',
                                        text: 'Excel',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3, 4, 5]
                                        },
                                        filename: 'DATA_USER',
                                        title: 'Data User'
                                    },
                                    {
                                        extend: 'csvHtml5',
                                        text: 'CSV',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3, 4, 5]
                                        },
                                        filename: 'DATA_USER',
                                        title: 'Data User'
                                    },
                                    {
                                        extend: 'print',
                                        text: 'Print',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3, 4, 5]
                                        },
                                        filename: 'DATA_USER',
                                        title: '<h4>Data User</h4>'
                                    },
                                ]
                            },
                            {
                                extend: 'colvis',
                                text: '<i class="fa fa-eye"></i>',
                                columns: [1, 2, 3, 4],
                                titleAttr: 'Hide Coloum'
                            },
                            {
                                text: '<i class="fa fa-plus"></i>',
                                action: function (e, dt, node, config) {
                                    location.hash = `#/partner/${id}/user/add`
                                },
                                titleAttr: 'Add'
                            },
                        ]
                    },
                    data: data.partner_users,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <a href="#/partner/user/${row.id}">${row.full_name}</a>
                            `;
                            }
                        },
                        {
                            data: "address",
                            render: function (data, type, row) {
                                return `
                                ${row.address}
                            `;
                            }
                        },
                        {
                            data: "phone"
                        },
                        {
                            data: "user.email"
                        },
                        {
                            data: "position"
                        },
                        {
                            data: "active",
                            render: function (data, type, row) {
                                if (row.user.active === 'Y') {
                                    return `<b class="text-success">Active</b>`
                                } else {
                                    return `<b class="text-danger">Inactive</b>`
                                }
                            }
                        },
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti-settings"></i>
                                    </button>
                                    <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item btn-delete-detail" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.full_name}" data-title="Partner User" data-link="partner_user"><i class="fa fa-trash"></i> Delete</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#/partner/user/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                    </div>
                                </div>
                            `;
                            }
                        }
                    ],
                    order: [[0, "asc"]]
                })
            }

            if (container.contains($('#t_category')[0])) {

                $('#count_category').text(data.categories.length)

                const table = $('#t_category').DataTable({
                    columnDefs: [
                        {
                            targets: [2],
                            orderable: false
                        },
                        {
                            targets: [2],
                            searchable: false
                        }
                    ],
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'B><'col-md-6'f>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    buttons: {
                        dom: {
                            button: {
                                tag: 'button',
                                className: 'btn btn-md btn-primary my-action'
                            }
                        },
                        buttons: [
                            {
                                extend: 'collection',
                                text: '<i class="fa fa-download"></i> ',
                                titleAttr: 'Export Data',
                                buttons: [
                                    {
                                        extend: 'pdfHtml5',
                                        text: 'PDF',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_CATEGORY',
                                        title: 'Data Category',
                                    },
                                    {
                                        extend: 'excelHtml5',
                                        text: 'Excel',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_CATEGORY',
                                        title: 'Data Category'
                                    },
                                    {
                                        extend: 'csvHtml5',
                                        text: 'CSV',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_CATEGORY',
                                        title: 'Data Category'
                                    },
                                    {
                                        extend: 'print',
                                        text: 'Print',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_CATEGORY',
                                        title: '<h4>Data Category</h4>'
                                    },
                                ]
                            },
                            {
                                extend: 'colvis',
                                text: '<i class="fa fa-eye"></i>',
                                columns: [1],
                                titleAttr: 'Hide Coloum'
                            },
                            {
                                text: '<i class="fa fa-plus"></i>',
                                action: function (e, dt, node, config) {
                                    location.hash = `#/partner/${id}/category/add`
                                },
                                titleAttr: 'Add'
                            },
                        ]
                    },
                    data: data.categories,
                    columns: [
                        {
                            data: "category_name"
                        },
                        {
                            data: "other_information"
                        },
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti-settings"></i>
                                    </button>
                                    <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item btn-delete-detail" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.category_name}"  data-title="Category" data-link="category"><i class="fa fa-trash"></i> Delete</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#/partner/category/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                    </div>
                                </div>
                            `;
                            }
                        }
                    ],
                    order: [[0, "asc"]]
                })
            }

            if (container.contains($('#t_building')[0])) {

                $('#count_building').text(data.buildings.length)

                const table = $('#t_building').DataTable({
                    columnDefs: [
                        {
                            targets: [5],
                            orderable: false
                        },
                        {
                            targets: [5],
                            searchable: false
                        }
                    ],
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'B><'col-md-6'f>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    buttons: {
                        dom: {
                            button: {
                                tag: 'button',
                                className: 'btn btn-md btn-primary my-action'
                            }
                        },
                        buttons: [
                            {
                                extend: 'collection',
                                text: '<i class="fa fa-download"></i> ',
                                titleAttr: 'Export Data',
                                buttons: [
                                    {
                                        extend: 'pdfHtml5',
                                        text: 'PDF',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_BUILDING',
                                        title: 'Data Building',
                                    },
                                    {
                                        extend: 'excelHtml5',
                                        text: 'Excel',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_BUILDING',
                                        title: 'Data Building'
                                    },
                                    {
                                        extend: 'csvHtml5',
                                        text: 'CSV',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_BUILDING',
                                        title: 'Data Building'
                                    },
                                    {
                                        extend: 'print',
                                        text: 'Print',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_BUILDING',
                                        title: '<h4>Data Building</h4>'
                                    },
                                ]
                            },
                            {
                                extend: 'colvis',
                                text: '<i class="fa fa-eye"></i>',
                                columns: [1],
                                titleAttr: 'Hide Coloum'
                            },
                            {
                                text: '<i class="fa fa-plus"></i>',
                                action: function (e, dt, node, config) {
                                    location.hash = `#/partner/${id}/building/add`
                                },
                                titleAttr: 'Add'
                            },
                        ]
                    },
                    data: data.buildings,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <a href="#/partner/building/${row.id}">${row.building_name}</a>
                            `;
                            }
                        },
                        {
                            data: "phone"
                        },
                        {
                            data: "email"
                        },
                        {
                            data: "address",
                            render: function (data, type, row) {
                                return `
                                ${row.address}, ${row.city.city}, ${row.province.province}
                            `;
                            }
                        },
                        {
                            data: "type"
                        },
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti-settings"></i>
                                    </button>
                                    <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item btn-delete-detail" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.building_name}"  data-title="Building" data-link="building"><i class="fa fa-trash"></i> Delete</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#/partner/building/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                    </div>
                                </div>
                            `;
                            }
                        }
                    ],
                    order: [[0, "asc"]]
                })

                DT.dtResponsive()
            }

            if (container.contains($('#t_procedure')[0])) {

                $('#count_procedure').text(data.procedures.length)

                const table = $('#t_procedure').DataTable({
                    columnDefs: [
                        {
                            targets: [3],
                            orderable: false
                        },
                        {
                            targets: [3],
                            searchable: false
                        }
                    ],
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'B><'col-md-6'f>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    buttons: {
                        dom: {
                            button: {
                                tag: 'button',
                                className: 'btn btn-md btn-primary my-action'
                            }
                        },
                        buttons: [
                            {
                                extend: 'collection',
                                text: '<i class="fa fa-download"></i> ',
                                titleAttr: 'Export Data',
                                buttons: [
                                    {
                                        extend: 'pdfHtml5',
                                        text: 'PDF',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_PROCEDURE',
                                        title: 'Data Procedure',
                                    },
                                    {
                                        extend: 'excelHtml5',
                                        text: 'Excel',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_PROCEDURE',
                                        title: 'Data Procedure'
                                    },
                                    {
                                        extend: 'csvHtml5',
                                        text: 'CSV',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_PROCEDURE',
                                        title: 'Data Procedure'
                                    },
                                    {
                                        extend: 'print',
                                        text: 'Print',
                                        exportOptions: {
                                            columns: [0, 1]
                                        },
                                        filename: 'DATA_PROCEDURE',
                                        title: '<h4>Data Procedure</h4>'
                                    },
                                ]
                            },
                            {
                                extend: 'colvis',
                                text: '<i class="fa fa-eye"></i>',
                                columns: [1],
                                titleAttr: 'Hide Coloum'
                            },
                            {
                                text: '<i class="fa fa-plus"></i>',
                                action: function (e, dt, node, config) {
                                    location.hash = `#/partner/${id}/procedure/add`
                                },
                                titleAttr: 'Add'
                            },
                        ]
                    },
                    data: data.procedures,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <a href="#/partner/procedure/${row.id}">${row.identifier_name}</a>
                            `;
                            }
                        },
                        {
                            data: "type"
                        },
                        {
                            data: "other_information"
                        },
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti-settings"></i>
                                    </button>
                                    <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item btn-delete-detail" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.identifier_name}" data-title="Procedure" data-link="procedure"><i class="fa fa-trash"></i> Delete</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#/partner/procedure/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                    </div>
                                </div>
                            `;
                            }
                        }
                    ],
                    order: [[0, "asc"]]
                })
            }

            if (container.contains($('#t_equipment')[0])) {

                $('#count_equipment').text(data.equipments.length)

                const table = $('#t_equipment').DataTable({
                    columnDefs: [
                        {
                            targets: [4],
                            orderable: false
                        },
                        {
                            targets: [4],
                            searchable: false
                        }
                    ],
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'B><'col-md-6'f>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    buttons: {
                        dom: {
                            button: {
                                tag: 'button',
                                className: 'btn btn-md btn-primary my-action'
                            }
                        },
                        buttons: [
                            {
                                extend: 'collection',
                                text: '<i class="fa fa-download"></i> ',
                                titleAttr: 'Export Data',
                                buttons: [
                                    {
                                        extend: 'pdfHtml5',
                                        text: 'PDF',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3]
                                        },
                                        filename: 'DATA_EQUIPMENT',
                                        title: 'Data Equipment',
                                    },
                                    {
                                        extend: 'excelHtml5',
                                        text: 'Excel',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3]
                                        },
                                        filename: 'DATA_EQUIPMENT',
                                        title: 'Data Equipment'
                                    },
                                    {
                                        extend: 'csvHtml5',
                                        text: 'CSV',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3]
                                        },
                                        filename: 'DATA_EQUIPMENT',
                                        title: 'Data Equipment'
                                    },
                                    {
                                        extend: 'print',
                                        text: 'Print',
                                        exportOptions: {
                                            columns: [0, 1, 2, 3]
                                        },
                                        filename: 'DATA_EQUIPMENT',
                                        title: '<h4>Data Equipment</h4>'
                                    },
                                ]
                            },
                            {
                                extend: 'colvis',
                                text: '<i class="fa fa-eye"></i>',
                                columns: [1, 2, 3],
                                titleAttr: 'Hide Coloum'
                            },
                            {
                                text: '<i class="fa fa-plus"></i>',
                                action: function (e, dt, node, config) {
                                    location.hash = `#/partner/${id}/equipment/add`
                                },
                                titleAttr: 'Add'
                            },
                        ]
                    },
                    data: data.equipments,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <a href="#/partner/equipment/${row.id}">${row.sku}</a>
                            `;
                            }
                        },
                        {
                            data: "equipment_name"
                        },
                        {
                            data: "category.category_name"
                        },
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <a href="#/partner/building/${row.building.id}">${row.building.building_name}</a>
                            `;
                            }
                        },
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti-settings"></i>
                                    </button>
                                    <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item btn-delete-detail" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.equipment_name}" data-title="Equipment" data-link="equipment"><i class="fa fa-trash"></i> Delete</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#/partner/equipment/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                    </div>
                                </div>
                            `;
                            }
                        }
                    ],
                    order: [[0, "asc"]]
                })
            }

            if (container.contains($('.btn-delete')[0])) {
                _openDelete('#main_content')
                _submitDelete(TOKEN, data => {
                    location.hash = '#/partner'
                })
            }

            if (container.contains($('.btn-delete-detail')[0])) {
                _openDeleteDetail('#main_content', info => {
                    _submitDeleteDetail(TOKEN, info, data => {
                        $('#modal_delete_detail').modal('hide')
                        _fetchPartner(TOKEN, id, data => {
                            _detailObserver(TOKEN, id, data)
                            UI.renderDetail(data)
                        })
                    })
                })
                
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitAddUser = TOKEN => {
        $('#form_add').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                full_name: 'required',
                phone: 'required',
                email: 'required',
                username: 'required',
                active: 'required'
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}partner_user`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/user/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#add_container')
                    }
                })
            }
        })
    }

    const _addUserObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#add_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('#form_add')[0])) {
                $('.dropify').dropify();

                _submitAddUser(TOKEN)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _fetchPartnerUser = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}partner_user/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _detailPartnerUserObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('.btn-delete')[0])) {
                _openDelete('#main_content')
                _submitDelete(TOKEN, data => {
                    location.hash = '#/administrator'
                })
            }

            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }


    const _submitAddCategory = TOKEN => {
        $('#form_add').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                partner_id: 'required',
                category_name: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}category`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/${res.results.partner_id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#add_container')
                    }
                })
            }
        })
    }

    const _addCategoryObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#add_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('#form_add')[0])) {
                _submitAddCategory(TOKEN)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }


    const _submitAddBuilding = TOKEN => {
        $('#form_add').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                building_name: 'required',
                phone: 'required',
                address: 'required',
                city_id: 'required',
                province_id: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}building`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/building/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#add_container')
                    }
                })
            }
        })
    }

    const _addBuildingObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#add_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('#form_add')[0])) {
                $('#city_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}city`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.city
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    }
                });

                $('#province_id').select2({
                    dropdownParent: $('.container-fluid'),
                    ajax: {
                        url: `${SET.apiURL()}province`,
                        dataType: 'JSON',
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + TOKEN,
                            "Content-Type": "application/json",
                        },
                        data: function (params) {
                            var query = {
                                search: params.term,
                                limit: 100,
                            }

                            return query;
                        },
                        processResults: function (data) {
                            let filtered = [];

                            data.results.map(v => {
                                let obj = {
                                    id: v.id,
                                    text: v.province
                                }

                                filtered.push(obj)
                            })

                            return {
                                results: filtered
                            };
                        },
                        cache: true
                    },
                });

                _submitAddBuilding(TOKEN)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _fetchCategory = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}category/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _fetchBuilding = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}building/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _detailBuildingObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            let buildingSchedule = []

            data.schedules.forEach(v => {
                let bgClass;

                switch (v.type) {
                    case 'Preventive':
                        bgClass = 'bg-info'
                        break

                    case 'Corrective':
                        bgClass = 'bg-success'
                        break

                    case 'Checklist':
                        bgClass = 'bg-warning'
                        break
                }

                let obj = {
                    id: v.id,
                    title: v.type,
                    start: v.date + ' ' + v.time,
                    end: v.date + ' ' + v.time,
                    type: v.type,
                    className: bgClass
                }

                buildingSchedule.push(obj)
            })

            if (container.contains($('.btn-delete')[0])) {
                _openDelete('#main_content')
                _submitDelete(TOKEN, data => {
                    location.hash = '#/administrator'
                })
            }

            if (container.contains($('#calendar')[0])) {
                $('#calendar').fullCalendar({
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,basicWeek,basicDay'
                    },
                    defaultDate: moment().format("YYYY-MM-DD"),
                    editable: false,
                    eventLimit: true,
                    droppable: false,
                    allDay: true,
                    events: buildingSchedule,
                    eventClick: function (calEvent, jsEvent, view) {
                        let id = calEvent.id
                        let type = calEvent.type

                        switch (type) {
                            case 'Preventive':
                                location.hash = `#/preventive_schedule/${id}`
                                break

                            case 'Corrective':
                                location.hash = `#/corrective_schedule/${id}`
                                break

                            case 'Checklist':
                                location.hash = `#/checklist_schedule/${id}`
                                break
                        }

                    }
                });
            }
            
            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }




    const _submitAddProcedure = TOKEN => {
        $('#form_add').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                partner_id: 'required',
                identifier_name: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}procedure`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/procedure/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#add_container')
                    }
                })
            }
        })
    }

    const _addRow = () => {
        $('.btn_add_row').click(function () {
            UI.renderRowPrevetive()
        })
    }

    const _removeRow = () => {
        $('#t_detail').on('click', '.btn-remove', function () {
            let id = $(this).data('id')
            let remove = $(this).data('remove')

            if (remove === true && id) {
                $('#row_' + id).remove();
            }
        })
    }

    const _addProcedureObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#add_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('#form_add')[0])) {
                UI.resetCount()

                _addRow()
                _removeRow()

                _submitAddProcedure(TOKEN)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _fetchProcedure = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}procedure/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _detailProcedureObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('.btn-delete')[0])) {
                _openDelete('#main_content')
                _submitDelete(TOKEN, data => {
                    location.hash = '#/administrator'
                })
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }



    const _submitAddEquipment = TOKEN => {
        $('#form_add').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                sku: 'required',
                equipment_name: 'required',
                building_id: 'required',
                category_id: 'required',
                procedure_id: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}equipment`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/partner/equipment/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#add_container')
                    }
                })
            }
        })
    }

    const _addEquipmentObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#add_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('#form_add')[0])) {
                $('.dropify').dropify();

                $('#category_id').select2();
                $('#building_id').select2();
                $('#procedure_id').select2();

                _submitAddEquipment(TOKEN)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _fetchEquipment = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}equipment/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _detailEquipmentObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('.btn-delete')[0])) {
                _openDelete('#main_content')
                _submitDelete(TOKEN, data => {
                    location.hash = '#/administrator'
                })
            }

            if (container.contains($('#t_preventive')[0])) {

                $('#count_preventive').text(data.preventive_reports.length)

                const table = $('#t_preventive').DataTable({
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'><'col-md-6'>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    data: data.preventive_reports,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                    <a href="#/preventive_report/${row.id}">${row.report_number}</a>
                                `;
                            }
                        },
                        {
                            data: "date"
                        },
                        {
                            data: "approved_by"
                        },
                    ],
                    order: [[1, "desc"]]
                })
            }

            if (container.contains($('#t_corrective')[0])) {

                $('#count_corrective').text(data.corrective_reports.length)

                const table = $('#t_corrective').DataTable({
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'><'col-md-6'>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    data: data.corrective_reports,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                    <a href="#/corrective_report/${row.id}">${row.report_number}</a>
                                `;
                            }
                        },
                        {
                            data: "date"
                        },
                        {
                            data: "approved_by"
                        },
                    ],
                    order: [[1, "desc"]]
                })
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    return {
        data: TOKEN => {
            const table = $('#t_partner').DataTable({
                columnDefs: [
                    {
                        targets: [5],
                        orderable: false
                    },
                    {
                        targets: [5],
                        searchable: false
                    }
                ],
                autoWidth: true,
                responsive: false,
                scrollX: true,
                scrollY: 300,
                processing: false,
                // select: {
                //     style: "multiple",
                //     selector: "td:first-child"
                // },
                language: SET.dtLanguage(),
                dom: "<'row mt-2 mb-2'<'col-md-6'B><'col-md-6'f>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                keys: { columns: [1, 2] },
                pageLength: 50,
                buttons: {
                    dom: {
                        button: {
                            tag: 'button',
                            className: 'btn btn-md btn-primary my-action'
                        }
                    },
                    buttons: [
                        {
                            extend: 'collection',
                            text: '<i class="fa fa-download"></i> ',
                            titleAttr: 'Export Data',
                            buttons: [
                                {
                                    extend: 'pdfHtml5',
                                    text: 'PDF',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3, 4]
                                    },
                                    filename: 'DATA_PARTNER',
                                    title: 'Data Partner',
                                },
                                {
                                    extend: 'excelHtml5',
                                    text: 'Excel',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3, 4]
                                    },
                                    filename: 'DATA_PARTNER',
                                    title: 'Data Partner'
                                },
                                {
                                    extend: 'csvHtml5',
                                    text: 'CSV',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3, 4]
                                    },
                                    filename: 'DATA_PARTNER',
                                    title: 'Data Partner'
                                },
                                {
                                    extend: 'print',
                                    text: 'Print',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3, 4]
                                    },
                                    filename: 'DATA_PARTNER',
                                    title: '<h4>Data Partner</h4>'
                                },
                            ]
                        },
                        {
                            extend: 'colvis',
                            text: '<i class="fa fa-eye"></i>',
                            columns: [1, 2, 3, 4],
                            titleAttr: 'Hide Coloum'
                        },
                        {
                            text: '<i class="fa fa-spinner"></i>',
                            action: function (e, dt, node, config) {
                                dt.ajax.reload()
                            },
                            titleAttr: 'Refresh'
                        },
                        {
                            text: '<i class="fa fa-search"></i>',
                            action: function (e, dt, node, config) {
                                $('#modal_search').modal('show')
                            },
                            titleAttr: 'Search'
                        },
                        {
                            text: '<i class="fa fa-plus"></i>',
                            action: function (e, dt, node, config) {
                                location.hash = '#/partner/add'
                            },
                            titleAttr: 'Add'
                        },
                    ]
                },
                ajax: {
                    url: `${SET.apiURL()}partner`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Content-Type", 'application/json')
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        $('#count_partner').text(res.results.length)

                        return res.results
                    },
                    statusCode: {
                        401: err => {
                            let error = err.responseJSON

                            if (error.message === 'Unauthenticated.') {
                                $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                            }

                            if (error.message === 'Unauthorized.') {
                                $('#app_content').load(`${SET.baseURL()}unauthorized`)
                            }
                        }
                    },
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/partner/${row.id}">${row.partner_name}</a>
                            `;
                        }
                    },
                    {
                        data: "address",
                        render: function (data, type, row) {
                            return `
                                ${row.address}, ${row.city.city}, ${row.province.province}
                            `;
                        }
                    },
                    {
                        data: "phone"
                    },
                    {
                        data: "fax"
                    },
                    {
                        data: "email"
                    },
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti-settings"></i>
                                    </button>
                                    <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item btn-delete" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.partner_name}"><i class="fa fa-trash"></i> Delete</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#/partner/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                    </div>
                                </div>
                            `;
                        }
                    }
                ],
                order: [[0, "asc"]]
            })

            DT.dtFilter(table)
            _openDelete('#t_partner')
            _submitDelete(TOKEN, data => {
                table.ajax.reload()
                $('#modal_delete').modal('hide')
            })
        },

        add: TOKEN => {
            $('.dropify').dropify();

            $('#city_id').select2({
                dropdownParent: $('.container-fluid'),
                ajax: {
                    url: `${SET.apiURL()}city`,
                    dataType: 'JSON',
                    type: 'GET',
                    headers: {
                        "Authorization": "Bearer " + TOKEN,
                        "Content-Type": "application/json",
                    },
                    data: function (params) {
                        var query = {
                            search: params.term,
                            limit: 100,
                        }

                        return query;
                    },
                    processResults: function (data) {
                        let filtered = [];

                        data.results.map(v => {
                            let obj = {
                                id: v.id,
                                text: v.city
                            }

                            filtered.push(obj)
                        })

                        return {
                            results: filtered
                        };
                    },
                    cache: true
                }
            });

            $('#province_id').select2({
                dropdownParent: $('.container-fluid'),
                ajax: {
                    url: `${SET.apiURL()}province`,
                    dataType: 'JSON',
                    type: 'GET',
                    headers: {
                        "Authorization": "Bearer " + TOKEN,
                        "Content-Type": "application/json",
                    },
                    data: function (params) {
                        var query = {
                            search: params.term,
                            limit: 100,
                        }

                        return query;
                    },
                    processResults: function (data) {
                        let filtered = [];

                        data.results.map(v => {
                            let obj = {
                                id: v.id,
                                text: v.province
                            }

                            filtered.push(obj)
                        })

                        return {
                            results: filtered
                        };
                    },
                    cache: true
                },
            });

            _submitAdd(TOKEN)

        },

        detail: (TOKEN, id) => {

            _fetchPartner(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        }, 

        edit: (TOKEN, id) => {
            _fetchPartner(TOKEN, id, data => {
                _editObserver(TOKEN, id, data)
                UI.renderEdit(data)
            })
        },

        addUser: (TOKEN, id) => {
            _fetchPartner(TOKEN, id, data => {
                _addUserObserver(TOKEN, id, data)
                UI.renderAddUser(data)
            })
        },

        detailPartnerUser: (TOKEN, id) => {
            _fetchPartnerUser(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.partner.id}`)
                _detailPartnerUserObserver(TOKEN, id, data)
                UI.renderDetailPartnerUser(data)
            })
        },

        editPartnerUser: (TOKEN, id) => {
            _fetchPartnerUser(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.partner.id}`)
                _editPartnerUserObserver(TOKEN, id, data)
                UI.renderEditPartnerUser(data)
            })
        },

        addCategory: (TOKEN, id) => {
            _fetchPartner(TOKEN, id, data => {
                _addCategoryObserver(TOKEN, id, data)
                UI.renderAddCategory(data)
            })
        },

        editCategory: (TOKEN, id) => {
            _fetchCategory(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.partner.id}`)
                _editCategoryObserver(TOKEN, id, data)
                UI.renderEditCategory(data)
            })
        },

        addBuilding: (TOKEN, id) => {
            _fetchPartner(TOKEN, id, data => {
                _addBuildingObserver(TOKEN, id, data)
                UI.renderAddBuilding(data)
            })
        },

        detailBuilding: (TOKEN, id) => {
            _fetchBuilding(TOKEN, id, data => {
                console.log(data)
                $('#link_back').attr('href', `#/partner/${data.partner.id}`)
                _detailBuildingObserver(TOKEN, id, data)
                UI.renderDetailBuilding(data)
            })
        },

        editBuilding: (TOKEN, id) => {
            _fetchBuilding(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.partner.id}`)
                _editBuildingObserver(TOKEN, id, data)
                UI.renderEditBuilding(data)
            })
        },

        addProcedure: (TOKEN, id) => {
            _fetchPartner(TOKEN, id, data => {
                _addProcedureObserver(TOKEN, id, data)
                UI.renderAddProcedure(data)
            })
        },

        detailProcedure: (TOKEN, id) => {
            _fetchProcedure(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.partner.id}`)
                _detailProcedureObserver(TOKEN, id, data)
                UI.renderDetailProcedure(data)
            })
        },

        editProcedure: (TOKEN, id) => {

            UI.resetCount()

            _fetchProcedure(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.partner.id}`)
                _editProcedureObserver(TOKEN, id, data)
                UI.renderEditProcedure(data)
            })
        },

        addEquipment: (TOKEN, id) => {
            _fetchPartner(TOKEN, id, data => {
                _addEquipmentObserver(TOKEN, id, data)
                UI.renderAddEquipment(data)
            })
        },

        detailEquipment: (TOKEN, id) => {
            _fetchEquipment(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.building.partner.id}`)
                _detailEquipmentObserver(TOKEN, id, data)
                UI.renderDetailEquipment(data)
            })
        },

        editEquipment: (TOKEN, id) => {
            _fetchEquipment(TOKEN, id, data => {
                $('#link_back').attr('href', `#/partner/${data.building.partner.id}`)
                _editEquipmentObserver(TOKEN, id, data)
                UI.renderEditEquipment(data)
            })
        },


    }
})(settingController, dtController, partnerUI, lookupController)

export default partnerController