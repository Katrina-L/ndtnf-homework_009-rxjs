/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import axios from "axios";

@Injectable()
export class GithubService {
    searchRepo(query: string) {
        const url = `https://api.github.com/search/repositories?q=${query}`;
        return from(axios.get(url)).pipe(map(res => res.data));

    }

    searchGitLabProjects(query: string) {
        const url = `https://gitlab.com/api/v4/projects?search=${query}`;
        return from(axios.get(url)).pipe(map(res => res.data));
    }
}