import { Injectable } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService{

    headers: any;
    options: any;
    url: string = 'http://localhost/contact-api';

    constructor(private http: Http){
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        this.options = new RequestOptions({headers: this.headers});
    }

    findAll(){
        return this.http.get(this.url+'/findAll', this.options)
        .map(res=>res.json())
        .catch(this.handleError);
    }

    searchByName(searchItem){
        return this.http.post(this.url+'/search', searchItem, this.options)
        .map(res=>res.json())
        .catch(this.handleError);
    }

    removeById(id){
        return this.http.get(this.url+'/remove/'+id, this.options)
        .map(res=>res.json())
        .catch(this.handleError);
    }

    save(contact){
        return this.http.post(this.url+'/save', contact, this.options)
        .map(res=>res.json())
        .catch(this.handleError);
    }

    update(contact){
        return this.http.post(this.url+'/update', contact, this.options)
        .map(res=>res.json())
        .catch(this.handleError);
    }

    handleError(error){
        return Observable.throw(error.json().error || 'Server Error');
    }
}
