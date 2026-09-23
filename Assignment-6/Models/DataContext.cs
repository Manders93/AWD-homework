using Microsoft.EntityFrameworkCore;

public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
{
    public DbSet<Country> Countries { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Country>()
            .Property(c => c.Gold)
            .HasDefaultValue(0);

        modelBuilder.Entity<Country>()
            .Property(c => c.Silver)
            .HasDefaultValue(0);

        modelBuilder.Entity<Country>()
            .Property(c => c.Bronze)
            .HasDefaultValue(0);
    }
}