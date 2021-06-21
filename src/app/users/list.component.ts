import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;

    constructor(private userService: UserService) {}



    ngOnInit() {
        this.userService.getAll().subscribe(users => 
            {
            console.log('this.users',users );
            this.users = users;
            console.log('this.users',this.users );

        }
            
            
            );
            
    }

    deletedUser = [];
    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.deletedUser.push(user);
        this.userService.delete(id)
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }

    RestoreUser(id: string) {
        const user = this.deletedUser.find(x => x.id === id);
        user.isDeleting = false;
       this.deletedUser =  this.deletedUser.filter(x => x.id !== id);
       this.users.push(user);
        
    }


}