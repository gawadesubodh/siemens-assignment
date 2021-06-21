import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            companyname: ['', Validators.required],
            city: ['', Validators.required],
            street: ['', Validators.required],
            zipcode :['', Validators.required],
            suite :['', Validators.required],

            
        });

        if (!this.isAddMode) {
            this.userService.getById(this.id)
              
                .subscribe((x:any) => {
                    console.log('x',x);
                    var obj = x;
                    const objpatch = {
                        name: obj.name,
                        companyname:obj.company.name,
                        city:obj.address.city,
                        zipcode:obj.address.zipcode,
                        suite:obj.address.suite,
                        street:obj.address.street
                    }
                    this.form.patchValue(objpatch)
                });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        console.log('objs',this.isAddMode);

        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createUser();
        } else {
            this.updateUser();
        }
    }

    private createUser() {
        this.userService.create(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                error: error => {
                    this.loading = false;
                }
            });
    }

    private updateUser() {
        const obj = this.form.value;
        console.log('obj',obj);
        
        console.log(obj);
        
       let userObj = {
                name:obj.name,
                company:{
                    name:obj.companyname
                },
                address:{
                    street:obj.street,
                    suite:obj.suite,
                    city:obj.city,
                    zipcode:obj.zipcode
                }
        }
        this.userService.update(this.id, userObj)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['../../'], { relativeTo: this.route });
                },
                error: error => {
                    this.loading = false;
                }
            });
    }
}