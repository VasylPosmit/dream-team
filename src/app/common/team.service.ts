import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';
import { MEMBERS } from './mock-team';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeamService {
  private membersUrl = 'api/members';  // URL to web api
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMembersList(): Observable<Member[]> {
    this.messageService.add('TeamService: fetched team members')
    return this.http.get<Member[]>(this.membersUrl)
        .pipe(
          tap(members => this.log(`TeamService: fetched team members`)),
          catchError(this.handleError('getMembersList', []))
        );
  }
  /** GET member by id. Will 404 if id not found */
  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
    this.messageService.add(`TeamService: fetched member id=${id}`);
    // return of(MEMBERS.find(member => member.id === id));
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }
  /** PUT: update the member on the server */
  updateMember (member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, httpOptions)
    .pipe(
      tap(_ => this.log(`updated member id=${member.id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }
  /** POST: add a new member to the server */
  addMember (member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, httpOptions)
    .pipe(
      tap((member: Member) => this.log(`added member w/ id=${member.id}`)),
      catchError(this.handleError<Member>('addMember'))
    );
  }
  /** DELETE: delete the member from the server */
  deleteMember (member: Member | number): Observable<Member> {
    const id = typeof member === 'number' ? member : member.id;
    const url = `${this.membersUrl}/${id}`;

    return this.http.delete<Member>(url, httpOptions)
    .pipe(
      tap(_ => this.log(`deleted member id=${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }
  /* GET members whose name contains search term */
  searchMembers(term: string): Observable<Member[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Member[]>(`api/members/?name=${term}`)
    .pipe(
      tap(_ => this.log(`found members matching "${term}"`)),
      catchError(this.handleError<Member[]>('searchMembers', []))
    );
  }
  /** Log a TeamService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TeamService: ' + message);
  }
}
