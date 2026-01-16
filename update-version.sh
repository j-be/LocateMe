#!/bin/bash

# This script updates the version number in the specified files.
# Usage: ./update-version.sh <new_version>
set -e

if [ $# -ne 1 ]; then
    echo "Usage: $0 <new_version>"
    exit 1
fi

NEW_VERSION=$1

# Update version in package.json
pushd locateMe
npm version $NEW_VERSION --no-git-tag-version --allow-same-version
npm install --lockfile-only
popd

# Update version in sonar-project.properties
sed -i.bak -E "s/^(sonar.projectVersion=).*/\1$NEW_VERSION/" sonar-project.properties
rm sonar-project.properties.bak

# Commit changes and create a git tag
git add locateMe/package.json locateMe/package-lock.json sonar-project.properties
git commit -m "[Version] Release $NEW_VERSION"
git tag "v$NEW_VERSION"
