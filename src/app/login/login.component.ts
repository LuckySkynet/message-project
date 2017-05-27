import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public vcr: ViewContainerRef,
    public toastr: ToastsManager
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  login() {
    this.toastr.success('正在跳转页面，请稍等……', '登录成功!')
    // 注意必须使用箭头函数，指向函数定义时的this
    setTimeout(() => {
      this.router.navigateByUrl('workspace');
    }, 300);
  }

  regist() {
    this.router.navigateByUrl('regist');
  }

}
