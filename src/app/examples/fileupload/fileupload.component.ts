import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { TabsetComponent } from 'ngx-bootstrap';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DatePickerComponent } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
  animations: [flyIn]
})
export class FileuploadComponent implements OnInit {
  private URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
  public uploader: FileUploader = new FileUploader({ url: this.URL });

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor(
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  uploadFile(item: FileItem) {
    item.onSuccess = (response, status, headers) => {
      // 上传文件成功   
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        console.info(response);
        this.toastr.success('正在加载数据，请稍等...', '上传成功!')
      } else {
        // 上传文件后获取服务器返回的数据错误        
      }
    };
    item.upload(); // 开始上传
  }

}
