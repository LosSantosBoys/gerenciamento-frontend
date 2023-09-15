import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../auth-service/auth-service';
@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {
  @Input() set appHasRole(role: string) {
    const userRoles = this.authService.getUserRoles();
    if (userRoles && userRoles.includes(role)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthenticationService
  ) { }
}
