import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  groups: Observable<any>;

  constructor(
    private auth: AuthService,
    private router: Router,
    private chatSvc: ChatService
  ) { }

  ngOnInit() {
    this.groups = this.chatSvc.getChatGroups();
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
