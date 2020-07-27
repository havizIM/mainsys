<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	function __construct()
    {
		parent::__construct();
        
		if($this->session->has_userdata('logged_in') ){
			redirect('/'.strtolower($this->session->userdata('roles').'/'));
		}
	}

	public function login()
	{
		$this->load->view('auth/login');
	}
}
