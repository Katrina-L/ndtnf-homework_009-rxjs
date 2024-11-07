/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from "@nestjs/common";
import { GithubService } from "./github.service";

@Controller('github')
export class GithubController {
    constructor (private readonly githubService: GithubService) {}

    @Get('repositories')
    searchRepo(@Query('query') query: string) {
        return this.githubService.searchRepo(query);
    }

    @Get('gitlab/projects')
    searchGitLabProjects(@Query('query') query) {
        return this.githubService.searchGitLabProjects(query);
    }
}