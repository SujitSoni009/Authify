# Auth Project

This is a Spring Boot authentication app with a static frontend served from `src/main/resources/static`.

## Deployment Ready

### Local run

1. Build the project:
   ```bash
   mvn clean package
   ```
2. Run the JAR:
   ```bash
   java -jar target/auth-0.0.1-SNAPSHOT.jar
   ```
3. Open the app at:
   ```
   http://localhost:8080/index.html
   ```

### Environment configuration

This app supports environment variables for production deployment. Use these variables in your host:

- `SPRING_DATASOURCE_URL` - database URL (MySQL or other JDBC URL)
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `SPRING_DATASOURCE_DRIVER_CLASS_NAME` (default is `org.h2.Driver`)
- `PORT` (default `8080`)

If no database variables are set, the app falls back to an in-memory H2 database.

### Docker

A `Dockerfile` is included, so you can deploy with container platforms:

```bash
docker build -t auth-app .
docker run -p 8080:8080 auth-app
```

### Recommended deployment platforms

- **Render** — easy Java app deployment with env vars and managed MySQL
- **Railway** — fast setup for Java apps and database provisioning
- **Fly.io** — great for Docker-based deployment and global hosting
- **Heroku** — works well with `system.properties` and `Procfile` if you already have access

### Notes

- If you want to host the full app on one platform, use Render or Railway.
- If you only host frontend separately, the backend must still run on a Java-capable host.
