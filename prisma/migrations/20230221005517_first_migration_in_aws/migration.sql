BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [firstName] NVARCHAR(1000) NOT NULL,
    [lastName] NVARCHAR(1000),
    [email] NVARCHAR(1000) NOT NULL,
    [status] NVARCHAR(1000),
    [admin] BIT NOT NULL CONSTRAINT [User_admin_df] DEFAULT 0,
    [photo] NVARCHAR(1000),
    [password] NVARCHAR(1000),
    [firstAccess] BIT,
    [phone] NVARCHAR(1000),
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
