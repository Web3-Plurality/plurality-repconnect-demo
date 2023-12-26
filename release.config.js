module.exports = {
    branches: ['main'],
    'plugins': [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/npm',
      [
        '@semantic-release/exec',
        {
          'prepareCmd': `
            docker build . --file Dockerfile --tag ghcr.io/web3-plurality/plurality-repconnect-demo:latest \\
            && docker push ghcr.io/web3-plurality/plurality-repconnect-demo:latest \\
            && docker tag ghcr.io/web3-plurality/plurality-repconnect-demo:latest ghcr.io/web3-plurality/plurality-repconnect-demo:\${nextRelease.version} \\
            && docker push ghcr.io/web3-plurality/plurality-repconnect-demo:\${nextRelease.version}
           `,
          'npmPublish': false
        }
      ],
      '@semantic-release/git',
      '@semantic-release/github'
    ],
    'git': {
      'assets': ['package.json'],
      'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }
  };
  