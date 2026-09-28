
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Enable CORS for the React application
builder.Services.AddCors(options =>
{
    options.AddPolicy("Open", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:5173",
                "https://localhost:5173",
                "http://localhost:5174",
                "https://localhost:5174",
                "https://YOUR-GITHUB-USERNAME.github.io"
            )
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

// Register the DataContext service
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultSQLiteConnection")
    )
);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Medals API",
        Version = "v1",
        Description = "Olympic Medals API",
    });

    c.TagActionsBy(api => [api.HttpMethod]);
    c.EnableAnnotations();
});

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseCors("Open");

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();