// Subset of Spark API response shapes we actually use.
// Full schema: https://sparkapi.docs.apiary.io/

export interface SparkPhoto {
  Id?: string;
  Type?: string;
  Uri300?: string;
  Uri640?: string;
  Uri800?: string;
  UriLarge?: string;
  UriThumb?: string;
  Caption?: string;
}

export interface SparkStandardFields {
  ListingId?: string;
  ListPrice?: number;
  ClosePrice?: number;
  OriginalListPrice?: number;
  StandardStatus?: string;
  MlsStatus?: string;
  PropertyType?: string;
  PropertySubType?: string;
  BedsTotal?: number;
  BathsTotal?: number;
  BathsFull?: number;
  BathsHalf?: number;
  BuildingAreaTotal?: number;
  LivingArea?: number;
  LotSizeAcres?: number;
  LotSizeSquareFeet?: number;
  YearBuilt?: number;
  City?: string;
  StateOrProvince?: string;
  PostalCode?: string;
  UnparsedAddress?: string;
  StreetNumber?: string;
  StreetName?: string;
  PublicRemarks?: string;
  Latitude?: number;
  Longitude?: number;
  ModificationTimestamp?: string;
  PhotosCount?: number;
  Photos?: SparkPhoto[];
  PrimaryPhoto?: SparkPhoto;
  VirtualTourUrlUnbranded?: string;
}

export interface SparkListing {
  Id: string;
  ResourceUri?: string;
  StandardFields: SparkStandardFields;
}

export interface SparkListResponse<T = SparkListing> {
  D: {
    Success: boolean;
    Results: T[];
    Pagination?: {
      TotalRows: number;
      PageSize: number;
      CurrentPage: number;
      TotalPages: number;
    };
    Errors?: Array<{ Status: number; Message: string }>;
  };
}

export interface ListingsQuery {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  propertyType?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: "price-asc" | "price-desc" | "newest";
}
