import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { VendorModule } from "./vendor/vendor.module";
import { WishlistModule } from "./wishlist/wishlist.module";
import { ReturnRequestModule } from "./returnRequest/returnRequest.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { OrderModule } from "./order/order.module";
import { AnalyticsModule } from "./analytics/analytics.module";
import { ReviewModule } from "./review/review.module";
import { CategoryModule } from "./category/category.module";
import { SettingModule } from "./setting/setting.module";
import { SupportTicketModule } from "./supportTicket/supportTicket.module";
import { NotificationModule } from "./notification/notification.module";
import { MessageModule } from "./message/message.module";
import { ShippingModule } from "./shipping/shipping.module";
import { FaqModule } from "./faq/faq.module";
import { ActivityLogModule } from "./activityLog/activityLog.module";
import { DiscountModule } from "./discount/discount.module";
import { PaymentModule } from "./payment/payment.module";
import { UserModule } from "./user/user.module";
import { FileUploadModule } from "./FileUpload/fileupload.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ProductModule,
    VendorModule,
    WishlistModule,
    ReturnRequestModule,
    SubscriptionModule,
    OrderModule,
    AnalyticsModule,
    ReviewModule,
    CategoryModule,
    SettingModule,
    SupportTicketModule,
    NotificationModule,
    MessageModule,
    ShippingModule,
    FaqModule,
    ActivityLogModule,
    DiscountModule,
    PaymentModule,
    UserModule,
    FileUploadModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
