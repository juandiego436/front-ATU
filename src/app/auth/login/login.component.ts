import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';

import { Credential } from '@interfaces/auth.interface';
import { TipoDocumento } from '@interfaces/documenType.interface';

import { AuthService } from '@services/auth.service';
import { DocumentTypeService } from '@services/document-type.service';

import { NgxHttpLoaderService } from 'ngx-http-loader';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  documents: TipoDocumento[];
  selectedTypeDocument: TipoDocumento;
  appForm: FormGroup;

  constructor(
    private router: Router,
    private documentTypeService: DocumentTypeService,
    private deviceService: DeviceDetectorService,
    private authService: AuthService,
    private fb: FormBuilder,
    private ngxhttploader: NgxHttpLoaderService
  ) {
    this.listTuypeDocuments();
    // this.ngxhttploader.show();
  }

  ngOnInit(): void {
    this.appForm = this.fb.group({
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: ['46833159', [Validators.required]],
      password: ['12345678', [Validators.required]]
    })
  }

  private listTuypeDocuments() {
    this.documentTypeService
      .getListTypeDocument().subscribe((response) => this.documents = response);
  }

  public logIn() {
    if(this.appForm.invalid) {
      return;
    }
    const { deviceType } = this.deviceService.getDeviceInfo()
    const { tipoDocumento, ...data } = this.appForm.getRawValue()
    const credentials: Credential = {
      ...data,
      tipoDocumento: tipoDocumento.id,
      dispositivo: deviceType
    }
    this.authService.login(credentials).subscribe();
  }

  public register() {
    this.router.navigate(["/register"])
  }

  public resetPassword() {
    this.router.navigate(["/reset"])
  }

}

interface Document {
  name: string,
  code: string
}