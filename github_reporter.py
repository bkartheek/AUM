#!/usr/bin/env python3
"""
GitHub Reporter Utility
Queries the public GitHub REST API to compile profile details and repositories overview.
Uses Python's standard libraries to avoid external dependency issues.
"""

import sys
import json
import urllib.request
import urllib.error

def fetch_json(url, token=None):
    headers = {
        "User-Agent": "AUM-Intent-Engine-Reporter/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"
        
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        print(f"HTTP Error querying {url}: {e.code} - {e.reason}", file=sys.stderr)
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"Connection Error: {e.reason}", file=sys.stderr)
        sys.exit(1)

def main():
    print("=========================================")
    print("   GitHub Profile Activity Reporter      ")
    print("=========================================\n")
    
    if len(sys.argv) > 1:
        username = sys.argv[1]
    else:
        username = input("Enter GitHub Username to report: ").strip()
        
    if not username:
        print("Error: No username provided.", file=sys.stderr)
        sys.exit(1)
        
    token = input("Enter Github Personal Access Token (PAT) [Optional - Press Enter to Skip]: ").strip()
    if token == "":
        token = None

    print(f"\nFetching statistics for GitHub user: '{username}'...")
    
    user_url = f"https://api.github.com/users/{username}"
    repos_url = f"https://api.github.com/users/{username}/repos?per_page=100"
    
    user_info = fetch_json(user_url, token)
    repos_info = fetch_json(repos_url, token)
    
    print("\n------------------------------")
    print("       👤 PROFILE SUMMARY      ")
    print("------------------------------")
    print(f"Username   : {user_info.get('login', 'N/A')}")
    print(f"Name       : {user_info.get('name', 'N/A')}")
    print(f"Bio        : {user_info.get('bio', 'N/A')}")
    print(f"Location   : {user_info.get('location', 'N/A')}")
    print(f"Public Repos: {user_info.get('public_repos', 0)}")
    print(f"Followers  : {user_info.get('followers', 0)}")
    
    print("\n------------------------------")
    print("       📂 REPOSITORY DETAILS   ")
    print("------------------------------")
    if not repos_info:
        print("No public repositories found or accessible.")
    else:
        total_stars = 0
        total_forks = 0
        languages = {}
        
        print(f"{'Repository Name':<30} | {'Stars':<5} | {'Forks':<5} | {'Language':<15}")
        print("-" * 65)
        for repo in repos_info:
            name = repo.get('name', 'Unknown')
            stars = repo.get('stargazers_count', 0)
            forks = repo.get('forks_count', 0)
            lang = repo.get('language') or "None"
            
            total_stars += stars
            total_forks += forks
            languages[lang] = languages.get(lang, 0) + 1
            
            print(f"{name[:30]:<30} | {stars:<5} | {forks:<5} | {lang:<15}")
            
        print("-" * 65)
        print(f"Total Stars: {total_stars}")
        print(f"Total Forks: {total_forks}")
        print("Languages breakdown:")
        for lang, count in sorted(languages.items(), key=lambda item: item[1], reverse=True):
            print(f"  * {lang}: {count} repository(s)")
            
    print("\nReport generation completed successfully.")

if __name__ == "__main__":
    main()
